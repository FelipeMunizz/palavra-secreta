import "./HomePage.css"

const HomePage = ({startGame}) => {
  return (
    <div className="start">
        <h1>Palavra Secreta</h1>
        <p>Clique no botão abaixo para iniar o jogo</p>

        <button onClick={startGame}>Iniciar</button>
    </div>
  )
}

export default HomePage