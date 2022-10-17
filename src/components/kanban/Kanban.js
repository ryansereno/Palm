import { useState } from "react";
import classes from "./Kanban.module.css";
import Item from "./Item";
import DropWrapper from "./DropWrapper";
import ColumnDropArea from "./ColumnDropArea";
import { data, statuses } from "../data/index";

const DndComponent = (props) => {
  const [items, setItems] = useState(data);
  const onDrop = (item, monitor, status) => {
    const mapping = statuses.find((si) => si.status === status);

    setItems((prevState) => {
      const newItems = prevState
        .filter((i) => i.id !== item.id)
        .concat({ ...item, status, icon: mapping.icon });
      return [...newItems];
    });
  };

  const moveItem = (dragIndex, hoverIndex) => {
    const item = items[dragIndex];
    setItems((prevState) => {
      const newItems = prevState.filter((i, idx) => idx !== dragIndex);
      newItems.splice(hoverIndex, 0, item);
      return [...newItems];
    });
  };

  return (
    <div className={classes.kanban}>
      {statuses.map((s) => {
        return (
          <div key={s.status} className={classes.column}>
            <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
            <DropWrapper onDrop={onDrop} status={s.status}>
              <ColumnDropArea>
                {items
                  .filter((i) => i.status === s.status)
                  .map((i, idx) => {
                    return(
                      <Item
                        key={i.id}
                        item={i}
                        index={idx}
                        moveItem={moveItem}
                        status={i.status}
                      />
                    );
                  })}
              </ColumnDropArea>
            </DropWrapper>
          </div>
        );
      })}
    </div>
  );
};
export default DndComponent;
