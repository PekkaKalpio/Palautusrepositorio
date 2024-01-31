import { useEffect, useState } from 'react'
import Persons from './components/Persons.jsx'
import Filter from './components/Filter.jsx'
import PersonForm from './components/PersonForm.jsx'
import PersonServices from './services/PersonServices.jsx'
import Notification from './components/Notification.jsx'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findName, setFindName] = useState('')
  const [notificationMsg, setNotificationMsg] = useState(null)
  const [errorColor, setErrorColor] = useState(false)

  useEffect(() =>{
    PersonServices
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [persons])

const timeOutMsg = () => {
  setTimeout(() => {
    setNotificationMsg(null)
  }, 5000)
}

const addPerson = (event) => {
  event.preventDefault()
  const personObject = {
    name: newName,
    number: newNumber
  }
  if(persons.find(({name}) => name === newName)){
    if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
      const changedPerson = persons.find(({name}) => name === newName)
      const changedNumber = {...changedPerson, number: newNumber}
      PersonServices
      .updateNumber(changedPerson.id, changedNumber)
      .then(response => {
          setPersons(persons.map(person => person.id !== changedPerson.id ? person : response))
          
          setErrorColor(false)
          setNotificationMsg(`Person ${newName}'s number changed succesfully`)
          timeOutMsg()

          setNewName('')
          setNewNumber('')
      }).catch(error => {
        console.log(error)
        setErrorColor(true)
        setNotificationMsg(`Information of ${newName} has already been removed from server`)
        timeOutMsg()
      })
    }
  }
  else{
    PersonServices
    .create(personObject)
    .then(response =>{
      setPersons(persons.concat(response))
      
      setErrorColor(false)
      setNotificationMsg(`Person ${newName} added to phonebook`)
      timeOutMsg()

      setNewName('')
      setNewNumber('')
    }).catch(error => {
      console.log(error)
      setErrorColor(true)
      setNotificationMsg(`Error adding person ${newName}`)
      timeOutMsg()
    })
    
  }
}

const deletePerson = (id) =>  {
  const deletedName = persons.find(person => person.id === id).name
  PersonServices
  .deletePerson(id)
  setErrorColor(false)
  setNotificationMsg(`Person ${deletedName} was removed from the phonebook`)
  timeOutMsg()
}

const handleNameChange = (event) => {
  setNewName(event.target.value)
}

const handleNumberChange = (event) => {
  setNewNumber(event.target.value)
}

const handleFilterChange = (event) => {
  setFindName(event.target.value)
}

const numbersToShow = persons.filter(person => person.name.toLowerCase().startsWith(findName.toLowerCase()))
// Array.filter() näyttää olevan case sensitive joten teen tässä molemmat pieniksi kirjaimiksi

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMsg} noteColor={errorColor}/>
      <Filter handleFilterChange={handleFilterChange} findName={findName}/>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} newNumber={newNumber}/>
      <Persons persons={numbersToShow} deletePerson={deletePerson}/>  
      {/* 
      PersonForm saa aika monta propsia joten ole varma onko tämä paras tapa tehdä komponenttia 
      Persons on vielä erotettu Person komponentti
      */}
    </div>
    
  )

}



export default App
