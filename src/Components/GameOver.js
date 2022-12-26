import './GameOver.css'

const GameOver = ({retry}) => {
  return (
    <div>
      <button onClick={retry}>Reiniciar</button>
    </div>
  )
}

export default GameOver