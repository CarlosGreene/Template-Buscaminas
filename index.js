function game({ rows, columns, bombs }) {
    return{
        uncoverCell: function({row, column}) {
            console.log(`Row ${row}, column: ${column}`)
        },
        placeFlag({row, column}) {
            console.log(`Row ${row}, column: ${column}`)
        }
    }
}

const game = Game({ rows : 9 , columns : 10, bombs: 10 })

game.uncoverCell({row:4, column:6})
game.placeFlag({row:8, column:6})