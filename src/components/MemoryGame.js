import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import "./Card.css"

const MemoryGame = () => {
   const num_list = [
    {
    value : 1,
    matched : false
   },
   {
    value : 2,
    matched : false
   },
   {
    value : 3,
    matched : false
   },
   {
    value : 4,
    matched : false
   },
   {
    value : 5,
    matched : false
   },
   {
    value : 6,
    matched : false
   },

]

const [cards, setCards] = useState([]) 

const [firstCard, setFirstCard] = useState(null)
const [secondCard, setSecondCard] = useState(null)

const [score, setScore] = useState(0)

const [finishGame,setFinishGame] = useState(false)





const prepareCards = () => {
    const random_list = [...num_list,...num_list].sort(() => 0.5 - Math.random())
    .map((item) => ({
        ...item , 
        id : Math.random()
    }))

    setCards(random_list)
}


const startGame = () => {
    prepareCards()
    setFinishGame(false)
    setScore(0)
}

const saveCard = (card) => {
 
 if(!firstCard && !secondCard) {
    setFirstCard(card)
    
 }
 else if(firstCard && !secondCard) {
    setSecondCard(card)
 }
 

}

const resetCard = () => {
    setFirstCard(null)
    setSecondCard(null)
   
}

const matchCard = () => {
    if(firstCard.value == secondCard.value) {
        cards.map(card => {
            if(card.value == firstCard.value) {
                card.matched = true
            }
        })
    
       
        
    }
    else {
      setTimeout(() => {
        setScore(score + 1)
      })
    }
}

const controlGame = () => {
    if(cards.every(card => card.matched)) {
        setFinishGame(true)
     }
}



useEffect(() => {
 prepareCards()
 
},[])


useEffect(() => {
    if(firstCard && secondCard) {
        matchCard()
        controlGame()
        setTimeout(() => {
            
            resetCard()
        },1000)
    }


}, [firstCard, secondCard])




    return (
      <Navbar cards = {cards} startGame = {startGame} saveCard = {saveCard} firstCard = {firstCard} secondCard = {secondCard} score = {score} finishGame = {finishGame} />
     
       
    )
}

export default MemoryGame