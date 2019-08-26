import React from "react";
import Grid from "../grid/Grid";
import "./Game.scss";

const GRID = {
    COLS: 7,
    ROWS: 6
};

const EMPTY_VALUE = 0;
const DEFAULT_PLAYER = 0;

const PLAYERS = [
    {
        value: 1,
        winCondition: "1111"
    },
    {
        value: 2,
        winCondition: "2222"
    }
];

function buildGrid() {
    return Array.from({ length: GRID.COLS }, () =>
        Array.from({ length: GRID.ROWS }, () => EMPTY_VALUE)
    );
}

const State = function() {
    return {
        grid: buildGrid(),
        winner: null,
        currentPlayer: PLAYERS[DEFAULT_PLAYER]
    };
};

class Game extends React.Component {
    constructor() {
        super();

        this.state = new State();
    }

    renderWinBanner() {
        if (!this.state.winner) {
            return null;
        }

        return (
            <div>
                <div className="Overlay" />
                <div className="Banner">
                    <div className="Banner__content">
                        <p>{`Victory for Player ${
                            this.state.currentPlayer.value
                        }!`}</p>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const boardClasses = ["Game__board"];
        if (this.state.winner) {
            boardClasses.push("Game__board--isOver");
        }

        return (
            <div className="Game">
                <div className="Game__players">
                    <p>{`Player ${this.state.currentPlayer.value}'s turn`}</p>
                </div>
                <div className={boardClasses.join(" ")}>
                    <Grid
                        cells={this.state.grid}
                        overlay={this.state.winner !== null}
                        onClick={c => this.columnClickedHandler(c)}
                    />
                </div>
                {this.renderWinBanner()}
            </div>
        );
    }

    columnClickedHandler(c) {
        if (this.state.winner) {
            return;
        }

        const grid = this.state.grid.slice();
        const r = grid[c].lastIndexOf(EMPTY_VALUE);

        if (r === -1) {
            return;
        }

        grid[c][r] = this.state.currentPlayer.value;

        let winner = null;
        if (this._didPlayerWin(c, r, grid, this.state.currentPlayer)) {
            winner = this.state.currentPlayer;
        }

        this.setState({
            grid,
            winner,
            currentPlayer: winner
                ? this.state.currentPlayer
                : PLAYERS.find(
                      player => player.value !== this.state.currentPlayer.value
                  )
        });
    }

    _checkWin(plays, winCondition) {
        return plays.length >= 4 && plays.indexOf(winCondition) > -1;
    }

    _diagonalWin(col, row, grid, currentPlayer) {
        // keeping the values within boundaries
        const minCol = Math.min(0, col - 3);
        const maxCol = Math.min(GRID.COLS - 1, col + 3);

        // keeping the values within boundaries
        const minRow = Math.min(0, row - 3);
        const maxRow = Math.min(GRID.ROWS - 1, row + 3);

        return false;
    }

    _horizontalWin(row, grid, winCondition) {
        return this._checkWin(
            grid.map(cols => cols[row]).join(""),
            winCondition
        );
    }

    _verticalWin(col, grid, winCondition) {
        return this._checkWin(grid[col].join(""), winCondition);
    }

    _didPlayerWin(col, row, grid, currentPlayer) {
        const winCondition = currentPlayer.winCondition;

        return (
            this._verticalWin(col, grid, winCondition) ||
            this._horizontalWin(row, grid, winCondition) ||
            this._diagonalWin(col, row, grid, winCondition)
        );
    }
}

export default Game;
