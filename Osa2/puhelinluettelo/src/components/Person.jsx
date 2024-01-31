const Person = ({person, deletePerson}) => {

  const deleteThis = () => {
    if (window.confirm(`Are you sure you want to delete ${person.name}?`)){
      deletePerson(person.id, person.name)
    }
  }

    return (
      <tr>
      <td>{person.name}</td>
      <td>{person.number}</td>
      <td><button onClick={() => deleteThis()}>delete</button></td>
      </tr>
  
    )
  }



export default Person