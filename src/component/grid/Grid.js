import React from "react";
import Cell from "./cell/Cell";
import "./Grid.scss";

class Grid extends React.Component {
    render() {
        const grid = this.props.cells.map((col, c) => {
            const rows = col.map((row, r) => (
                <Cell key={`${c}-${r}`} value={row} />
            ));

            const classes = ["Grid__col"];
            const isColFull = !col.some(row => row === null);

            if (isColFull) {
                classes.push("Grid__col--full");
            }

            return (
                <div
                    className={classes.join(" ")}
                    key={`${c}`}
                    onClick={() => this.props.onClick(c)}
                >
                    {rows}
                </div>
            );
        });

        return <div className="Grid">{grid}</div>;
    }
}

export default Grid;
