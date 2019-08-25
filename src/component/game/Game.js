import React from "react";
import Grid from "../grid/Grid";

const GRID = {
    COLS: 7,
    ROWS: 6
};

function buildGrid() {
    return Array.from({ length: GRID.COLS }, () =>
        Array.from({ length: GRID.ROWS }, () => null)
    );
}

const State = function() {
    return {
        grid: buildGrid(),
        player: 1,
        players: [1, 2]
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
                <div className="Game__players">
                    <p>{`Player ${this.state.player}'s turn`}</p>
                </div>
                <Grid
                    cells={this.state.grid}
                    onClick={c => this.onColumnClicked(c)}
                />
            </div>
        );
    }

    onColumnClicked(c) {
        const grid = this.state.grid.slice();
        const col = grid[c];
        let targetRow = null;

        for (var r = col.length - 1; r >= 0; r--) {
            const row = col[r];

            if (row === null) {
                targetRow = r;
                break;
            }
        }

        if (targetRow === null) {
            return;
        }

        grid[c][r] = this.state.player;

        this.setState({
            grid,
            player: this.state.players.find(
                player => player !== this.state.player
            )
        });
    }
}

export default Game;
