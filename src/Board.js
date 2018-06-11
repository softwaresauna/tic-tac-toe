import React from 'react';
import {Cell} from "./Cell";

export function Board() {

    return (
        <table border="1">
            <tbody>
            {row(0)}
            {row(1)}
            {row(2)}
            </tbody>
        </table>
    );

    function row(rowIndex) {
        return (
            <tr>
                <td>{cell(rowIndex, 0)}</td>
                <td>{cell(rowIndex, 1)}</td>
                <td>{cell(rowIndex, 2)}</td>
            </tr>
        );
    }

    function cell(row, column) {

        return <Cell row={row} column={column}/>;
    }
}