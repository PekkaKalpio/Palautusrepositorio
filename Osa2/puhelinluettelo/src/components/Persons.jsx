import Person from './Person.jsx'

const Persons = ({persons, deletePerson}) => {
    return(
        <div>
            <h2>Numbers</h2>
        <table>
            <tbody>
            <tr>
            <td>Name</td>
            <td>Number</td>
            </tr>
                {persons.map(person =>
                    <Person key={person.name} person={person} deletePerson={deletePerson} />
                )}
            </tbody>
        </table>
        </div>
    )
  }

  export default Persons