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
                {cell(rowIndex, 0)}
                {cell(rowIndex, 1)}
                {cell(rowIndex, 2)}
            </tr>
        );
    }

    function cell(row, column) {

        return <Cell row={row} column={column}/>;
    }
}