import './GameOver.css'

const GameOver = ({retry, pickedWord}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <p>A palavra era <span>{pickedWord}</span></p>
      <button onClick={retry}>Reiniciar</button>
    </div>
  )
}

export default GameOver