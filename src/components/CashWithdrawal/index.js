import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawl extends Component {
  state = {
    currentBalance: 2000,
  }

  withDrawal = value => {
    console.log(value)
    this.setState(prevState => ({
      currentBalance: prevState.currentBalance - value,
    }))
  }

  render() {
    const {currentBalance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="mainContent">
        <div className="userIdentity">
          <p>S</p>
          <h1>Sarah Williams</h1>
        </div>
        <div className="urBalance">
          <p>Your Balance</p>
          <div className="currentBalance">
            <h1>{currentBalance}</h1>
            <p>In Rupees</p>
          </div>
        </div>
        <div className="withDraw">
          <h1>Withdraw</h1>
          <p>CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominationList">
            {denominationsList.map(denomination => (
              <DenominationItem
                denomination={denomination}
                key={denomination.id}
                withDrawal={this.withDrawal}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawl
