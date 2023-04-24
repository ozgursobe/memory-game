import "./Card.css"
import CardArea from "./CardArea";
const Navbar = ( {cards, startGame, saveCard, firstCard, secondCard, score, finishGame} ) => {
    return (
    <div className="container">
        <div className="navbar">
         <h1 className="title">Welcome to Memory Game</h1>
         <button className="start-button" onClick={startGame}>Oyunu Başlat</button>
         <div className="score">Kaç tahminde bitireceksin : {score} </div>
          {finishGame ? <div>Oyunu Kazandınız</div> : <div></div> }
         </div>
        

        <div className="card-grid">
        {cards.map((card,index) => 
        (
         <CardArea card = {card} key = {index} saveCard = {saveCard} rotated = {card === firstCard || card === secondCard || card.matched} />
        )
          
        )}
        </div>
    </div>
    )
}


export default Navbar;