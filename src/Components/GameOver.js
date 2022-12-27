import './GameOver.css'

const GameOver = ({retry, pickedWord, score}) => {
  return (
    <div>
      <h1>Fim de Jogo</h1>
      <h2>Pontuação: <span>{score}</span> </h2>
      <p>A palavra era <span>{pickedWord}</span></p>
      <button onClick={retry}>Reiniciar</button>
    </div>
  )
}

export default GameOver