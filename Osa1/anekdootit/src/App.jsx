import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
 
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))

  

  let randnum = Math.floor(Math.random() * anecdotes.length)
  while(randnum===selected){
    randnum = Math.floor(Math.random() * anecdotes.length)
  }

  //en ole aivan varma onko tämä tehty halutulla tavalla mutta se toimii
  const handleVotes = () => {
    const copy = [...votes]
    copy[selected] +=1
    setVotes(copy)
  }
  
  //ei välttämättä paras tapa koska vertaa lukuja kahdesti taulukossa mutta tämä taulukko on vielä sen verran pieni että toimii
  const largest = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br/>
      <p>has {votes[selected]} votes</p>
      <br/>
      <button onClick={() => setSelected(randnum)}>New anecdote</button> 
      <button onClick={() => handleVotes()}>Vote</button>
      <br/>
      <h1>Anecdote with most votes</h1>
      {anecdotes[largest]}
      <p>has {votes[largest]} votes</p>
    </div>
  )
}



export default App
