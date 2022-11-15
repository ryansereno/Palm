import { useState } from "react";
import Item from "./Item";
import DropWrapper from "./DropWrapper";
import ColumnDropArea from "./ColumnDropArea";
import { data, statuses } from "../data/index";
import AddCard from "./AddCard";
import StyledKanban from "../styled/Kanban.styled"

const Kanban = (props) => {
  const [items, setItems] = useState(data);

  //onDrop function changes the status of the item (moving between columns), but runs even if the status does not change
  const onDrop = (item, monitor, status) => {
    setItems((prevState) => {
      const newItems = [...prevState];
      for (let i of newItems) {
        if (i.id === item.id) {
          i.status = status;
        }
      }

      //const mapping = statuses.find((si) => si.status === status);
      //prevState
      //.filter((i) => i.id !== item.id)
      //.concat({ ...item, status });

      return [...newItems];
    });
  };

  //runs while item is still being held
  const moveItem = (dragFromIndex, hoverIndex, holdingItem) => {
    console.log("drag from: ", dragFromIndex);
    console.log("hover over: ", hoverIndex);

    //chooses item that is picked up
    //index of entire item list CANNOT be compared to the index of a column

    //get the status that is being hovered over and move the item to that column while hovering
    //const isOverStatus = {};

    // reorders items
    setItems((prevState) => {
      //create new items array, exluding picked up item
      const newItems = prevState.filter((i) => {
        return i.id !== holdingItem.id;
      });

      //splice held item into new position in list
      newItems.splice(hoverIndex, 0, holdingItem);
      return [...newItems];
    });
    return;
  };

  return (
    <StyledKanban>
      {statuses.map((s) => {
        return (
          <div key={s.status} className="column">
            <h2 className="col-header">{s.status.toUpperCase()}</h2>
            <DropWrapper onDrop={onDrop} status={s.status}>
              <ColumnDropArea>
                <AddCard />
                {items
                  .filter((i) => i.status === s.status)
                  .map((i, idx) => {
                    return (
                      <Item
                        key={i.id}
                        item={i}
                        index={idx}
                        moveItem={moveItem}
                        status={s.status}
                      />
                    );
                  })}
                
              </ColumnDropArea>
            </DropWrapper>
          </div>
        );
      })}
    </StyledKanban>
  );
};
export default Kanban;
