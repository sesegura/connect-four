import React from "react";
import Grid from "../grid/Grid";

const GRID = {
    COLS: 7,
    ROWS: 6
};

const State = function() {
    return {
        grid: Array(GRID.COLS).fill(Array(GRID.ROWS).fill(null))
    };
};

class Game extends React.Component {
    constructor() {
        super();

        this.state = new State();
    }

    render() {
        return (
            <div className="Game">
                <Grid state={this.state.grid} />
            </div>
        );
    }
}

export default Game;
