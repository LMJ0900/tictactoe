
export default function GameBoard({ onSelectSquare, board }) {

  // const [gameBoard, setGameBorad] = useState(initalGameBoard)

  // function handleSelectSquare(rowIndex : any,colIndex : any){
  //     setGameBorad((preGameBoard)=>{
  //         const updatedBoard:any = [...preGameBoard.map(innerArray => [...innerArray])]
  //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol
  //         return updatedBoard
  //     })

  //     onSelectSquare();
  // }
  return (
    <>
      <ol id="game-board">
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
