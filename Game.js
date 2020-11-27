function game({ rows, columns, bombs }) {
    const matrix = []
    for (let i = 0; i < rows; i++) {
        const row = []
        for (let j = 0; j < columns; j++) {
            row.push(cellContent)
        }
        matrix.push(row)
    }
    return{
        uncoverCell({rows, columns}) {
            console.log(`Row ${rows}, column: ${columns}`)
        },
        placeFlag({rows, columns}) {
            console.log(`Row ${rows}, column: ${columns}`)
        }
    }
}

export default Game