const Filter = ({addPerson, newName, handleNameChange, handleNumberChange, newNumber}) => {


return (
<div>
    <h2>Phonebook</h2>
    <form onSubmit={addPerson}>
        <div>Name
        <input
          value={newName}
          onChange={handleNameChange}
        />
        </div>
        <div>Number
        <input
          value={newNumber}
          onChange={handleNumberChange}
        />
        </div>
        <div>
          <button type="submit" >add</button>
         
        </div>
    </form>
</div>
  )
}

export default Filter