import classes from './ColumnDropArea.module.css'
import React from "react";

const Col = ({ isOver, children }) => {
    const className = isOver ? classes["is-over"] : "";

    return (
        <div className={`${classes["drop-area"]} ${className}`}>
            {children}
        </div>
    );
};

export default Col;
