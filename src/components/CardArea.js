import "./Card.css"

const CardArea = ({card, index, saveCard, rotated}) => {

    const chooseCard = () => {
        saveCard(card)
    }
    return (
     <div className="card" key={index}>
        <div className= {rotated ? "rotated" : ""}>
        <p className="card-front">{card.value} </p>
        <div className="card-back" onClick={chooseCard}></div>
        </div>
    </div>
    )
}

export default CardArea