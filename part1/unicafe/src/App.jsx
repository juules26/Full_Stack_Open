import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({good, neutral, bad, all, average}) => (
  <table>
    <tbody>
      <tr>
        <td>good</td>
        <td>{good}</td>
      </tr>
      <tr>
        <td>neutral</td>
        <td>{neutral}</td>
      </tr>
      <tr>
        <td>bad</td>
        <td>{bad}</td>
      </tr>
      <tr>
        <td>all</td>
        <td>{all}</td>
      </tr>
      <tr>
        <td>average</td>
        <td>{`${average} %`}</td>
      </tr>
    </tbody>
  </table>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = (good + neutral + bad)
  const average = ((good*1)+(neutral*0)+(bad*-1))/all

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text='bad'/>
      <h1>statistics</h1>
      {all===0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        />
      )}
    </div>
  )
}


export default App
