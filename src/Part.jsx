import App from "./App"
const Part = (props) => {
    return(
     <>
    <ul>
      <li> {props.part} has {" "}{props.exercise} exercises in it</li> 
    </ul>

     </>  
    )
}


export default Part