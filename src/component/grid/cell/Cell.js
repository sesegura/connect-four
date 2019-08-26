import React from "react";
import "./Cell.scss";

export default function Cell(props) {
    const classes = ["Cell"];
    if (props.disabled) {
        classes.push("Cell--disabled");
    }

    return (
        <div className={classes.join(" ")}>
            <div className={`Cell__piece Cell__piece--player${props.value}`} />
        </div>
    );
}
