import './index.css'

const DenominationItem = props => {
  const {denomination, withDrawl} = props
  const {value} = denomination

  const cashWithdrawl = () => {
    withDrawl(value)
  }
  return (
    <li>
      <button type="button" onClick={cashWithdrawl}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
