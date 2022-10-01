import {Component} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImage: HEADS_IMG_URL, heads: 0, tails: 0}

  changeCoin = () => {
    const {heads, tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImage = ''
    let newHeadsCount = heads
    let newTailsCount = tails

    if (tossResult === 0) {
      tossImage = HEADS_IMG_URL
      newHeadsCount += 1
    } else {
      tossImage = TAILS_IMG_URL
      newTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      heads: newHeadsCount,
      tails: newTailsCount,
    })
  }

  render() {
    const {tossResultImage, heads, tails} = this.state
    const totalCount = heads + tails
    return (
      <div className="app-container">
        <div className="game-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossResultImage} className="image" alt="toss result" />
          <div>
            <button className="button" type="button" onClick={this.changeCoin}>
              Toss Coin
            </button>
          </div>
          <div className="result-container">
            <p className="result">Total:{totalCount}</p>
            <p className="result">Heads:{heads}</p>
            <p className="result">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
