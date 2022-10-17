import classes from './Column.module.css'
import React from "react";

const Col = ({ isOver, children }) => {
    const className = isOver ? " highlight-region" : "";

    return (
        <div >
            {children}
        </div>
    );
};

export default Col;
