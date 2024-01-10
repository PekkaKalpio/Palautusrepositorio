const App = () => {
  const course = {
  name:'Half Stack application development',
  parts:  [
    { 
      name: 'Fundamentals of React', 
      exercises: 10 
    },
    { 
      name: 'Using props to pass data', 
      exercises: 17 
    },
    { 
      name: 'State of a component', 
      exercises: 14 
    },
  ]
}
    return (
      <div>
        <Header headertext={course.name} />
        <Content parts={course.parts} />
        <Footer parts={course.parts} />
      </div>
    )
  }

const Header = ({headertext}) => <h1>{headertext}</h1>
  
const Content = ({parts}) => {
  const contentItems = parts.map(item  =>
  <Part key={item.name} name = {item.name} exercises = {item.exercises}/>
  )
  // tiedän että tämä on vähän erilainen kuin tehtävänannossa mutta halusin tutustua map:piin ja saada koodia siistimmäksi
  // destrukturoin myös propseja samalla kun luin osaa 1.c että saisin paremman käsityksen miten se toimii
  return(
    <div>
      {contentItems} 
      {/* Tässä myös tehtävänannossa haluttu tapa renderöidä contentti
      <Part name = {parts[0].name} exercises = {parts[0].exercises} />
      <Part name = {parts[1].name} exercises = {parts[1].exercises} />
      <Part name = {parts[2].name} exercises = {parts[2].exercises} />
      */}
    </div>
  )
}
  
const Part = ({name, exercises}) => <p>{name} {exercises}</p>

const Footer = ({parts}) => {
  let total = 0
  parts.forEach((element) => {
    total += element.exercises
  })
  return(
    <p>Number of exercises {total} </p>
  )
}

export default App