import App from './App'

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h2>{props.course}</h2>
    </div>
  )
}
export default Header
