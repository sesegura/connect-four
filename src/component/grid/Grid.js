import React from "react";
import Cell from "./cell/Cell";
import "./Grid.scss";

class Grid extends React.Component {
    render() {
        const grid = this.props.state.map((row, r) => {
            const cols = row.map((col, c) => (
                <Cell key={`${r}-${c}`} value={`${r}-${c}`} />
            ));

            return (
                <div className="Grid__row" key={`${r}`}>
                    {cols}
                </div>
            );
        });

        return <div className="Grid">{grid}</div>;
    }
}

export default Grid;
