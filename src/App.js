//Css
import './App.css';

//React
import {useCallback, useEffect, useState} from 'react';

//Dados
import {wordsList} from './Data/Word';

//Componentes
import HomePage from './Components/HomePage';
import Game from './Components/Game';
import GameOver from './Components/GameOver';

const stages = [
  {id: 1, name:"start"},
  {id: 2, name:"game"},
  {id: 3, name:"end"}
]

const guessesQty = 3

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wronLetters, setWronLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = () => {
    //Seleciona categoria aleatoria
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    //Seleciona palavra da categoria
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return{word, category}
  }
  //Starts
  const startGame = ( ) => {
    //Selecionar palavra e categoria
    const {word, category} = pickWordAndCategory()

    //Criando um array da palavra 
    let wordLetters = word.split("")

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)
    setGameStage(stages[1].name)    
  }

  //Processo a Letra do Input
  const verifyLetter = (letter) => {
    const normalizeLetter = letter.toLowerCase()

    if(guessedLetters.includes(normalizeLetter) || wronLetters.includes(normalizeLetter)){
      return
    }

    if(letters.includes(normalizeLetter))
    {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizeLetter
      ])
    } else {
      setWronLetters((actualWronLetters) => [
        ...actualWronLetters,
        normalizeLetter
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }

  const clearLetterStates = () =>{
    setGuessedLetters([])
    setWronLetters([])
  }

  useEffect(() => {
    if(guesses <= 0){
      clearLetterStates()

      setGameStage(stages[2].name)
    }
  }, [guesses])

  //Reiniciar
  const retry = () =>{
    setScore(0)
    setGuesses(guessesQty)

    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <HomePage startGame={startGame}/>}
      {gameStage === 'game' && (
      <Game 
      verifyLetter = {verifyLetter}
      pickedWord = {pickedWord}
      pickedCategory = {pickedCategory}
      letters = {letters}
      guessedLetters = {guessedLetters}
      wronLetters = {wronLetters}
      guesses = {guesses}
      score = {score}
      />)}
      {gameStage === 'end' && <GameOver retry={retry} pickedWord = {pickedWord} />}
    </div>
  );
}

export default App;