const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => (
        <p key={part.name}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  )
}

const Total = (props) => {
  const sum = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return (
    <p>Total of exercises: {sum}</p>
  )
}

export default App