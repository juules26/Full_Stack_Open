const Header = ({course}) => {
  return <h2>{course.name}</h2>
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  )
}

const Course = ({ course }) => {
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <p>
        <strong>
          total of {totalExercises} exercises
        </strong>
      </p>
    </div>
  )
}

export default Course