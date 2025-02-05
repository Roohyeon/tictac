import Square from "./Square";
import "./Board.css";
const Board = ({squares,onClick}) => {

  const randerSquares = (i) => {
    return <Square value={squares[i]}
        onClick={() => onClick(i)}/>
  }

  return(
    <div className="board-wrapper">
      <div className="board-row">
        {randerSquares(0)}
        {randerSquares(1)}
        {randerSquares(2)}
      </div>
      <div className="board-row">
        {randerSquares(3)}
        {randerSquares(4)}
        {randerSquares(5)}
      </div>
      <div className="board-row">
        {randerSquares(6)}
        {randerSquares(7)}
        {randerSquares(8)}
      </div>
    </div>
  )
}

export default Board;