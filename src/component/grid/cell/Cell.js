import React from "react";
import "./Cell.scss";

export default function Cell(props) {
    return (
        <div className="Cell">
            <div className="Cell__content">
                <p>{props.value}</p>
            </div>
        </div>
    );
}
