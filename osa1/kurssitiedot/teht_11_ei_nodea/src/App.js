const Header = (props) => {
  return (
    <div>
        <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
        <p>{props.part} {props.exrs}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p><bold>Number of exercises {props.amount}</bold></p>
    </div>
  )
}

const App = () => {
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
      <Content part={part1} exrs={exercises1} />
      <Content part={part2} exrs={exercises2} />
      <Content part={part3} exrs={exercises3} />
      <Total amount={exercises1 + exercises2 + exercises3} />      
    </div>
  )
}

export default App