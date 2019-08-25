import React from "react";
import "./Cell.scss";

export default function Cell(props) {
    return (
        <div className="Cell">
            <div className="Cell__content">{props.value}</div>
        </div>
    );
}
