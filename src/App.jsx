import Header from './Header'
import Content from './Content'
import Total from './Total'
const App = (props) => {
  console.log(props);
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header course={course} />
      <Content part_part={part1} exercise_name={exercises1} />
      <Content part_part={part2} exercise_name={exercises2} />
      <Content part_part={part3} exercise_name={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
