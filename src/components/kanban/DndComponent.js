import { useState } from "react";
import kanbanClasses from "./Kanban.module.css";
import Item from "./Item";
import DropWrapper from "./DropWrapper";
import Col from "./Col";
import { data, statuses } from "../data/index";
import columnClasses from './Column.module.css'

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
    <div className={kanbanClasses.kanban}>
      {statuses.map((s) => {
        return (
          <div key={s.status} className={columnClasses.column}>
            <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
            <DropWrapper onDrop={onDrop} status={s.status}>
              <Col>
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
              </Col>
            </DropWrapper>
          </div>
        );
      })}
    </div>
  );
};
export default DndComponent;
