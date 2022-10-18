import React, { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import ModalWindow from "./Window";
import ITEM_TYPE from "../data/types";
import classes from "./Card.module.css";

const Item = ({ item, index, moveItem, status }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragFromIndex = item.index; //item is asigned an index value by the map function in the Kanban component
      const hoverOverIndex = index; // index is the index of the item WITHIN the column

      //initially index and item.index are the same

      if (dragFromIndex === hoverOverIndex) {
        return; //if item is unmoved, do nothing
      }

      const hoveredRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
      const mousePosition = monitor.getClientOffset();
      const hoverClientY = mousePosition.y - hoveredRect.top;

      if (dragFromIndex < hoverOverIndex && hoverClientY < hoverMiddleY) {
        return; //dont do anything unless item is dragged BELOW middle of adjacent item
      }

      if (dragFromIndex > hoverOverIndex && hoverClientY > hoverMiddleY) {
        return; //dont do anything unless item is dragged ABOVE middle of adjacent item
      }
      moveItem(dragFromIndex, hoverOverIndex, item);
      item.index = hoverOverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPE,
    item: { type: ITEM_TYPE, ...item, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [show, setShow] = useState(false);

  const onOpen = () => setShow(true);

  const onClose = () => setShow(false);

  drag(drop(ref));

  return (
    <Fragment>
      <div
        ref={ref}
        style={{ opacity: isDragging ? 0 : 1 }} //removes item from list while draggin
        className={classes.card}
        onClick={onOpen}
      >
        <h3>{item.title}</h3>
      </div>
      <ModalWindow item={item} onClose={onClose} show={show} />
    </Fragment>
  );
};

export default Item;
