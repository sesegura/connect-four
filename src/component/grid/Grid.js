import React from "react";
import Cell from "./cell/Cell";
import "./Grid.scss";

class Grid extends React.Component {
    render() {
        const grid = this.props.state.map((col, c) => {
            const cells = col.map((cell, cl) => (
                <Cell key={`${c}-${cl}`} value={`${c}-${cl}`} />
            ));

            return (
                <div className="Grid__col" key={`${c}`}>
                    {cells}
                </div>
            );
        });

        return <div className="Grid">{grid}</div>;
    }
}

export default Grid;
