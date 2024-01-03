const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 17 },
    { name: 'State of a component', exercises: 14 },
  ]

const Header = (props) => {
  return (
    <h1>{props.headertext}</h1>
  )
}

const Content = (props) => {
  /*const contentItems = props.parts.map(element  =>
  <Part key={element.name} partcontent = {element} />
   ) */

  //lähdin ehkä keulimaan listoja renderöimällä ja alempana foreachilla mutta halusin siistimpää koodia ja tietää miten sen voisi tehdä
  //voipi siis olla vähän huonolla tavalla tehty ja kommentoin tämän kun katsoin tehtävänantoa ja näin sen esimerkin uudelleen
  
  return(
    <div>
       {/*  {contentItems} */}
      <Part partcontent = {props.parts[0]} />
      <Part partcontent = {props.parts[1]} />
      <Part partcontent = {props.parts[2]} />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
    {props.partcontent.name} {props.partcontent.exercises}
    </p>
  )
  }
  
  const Footer = (props) => {
    let total = 0
    props.parts.forEach((element) => {
      total += element.exercises
      console.log(element)
    })
    
    return(
      <p>Number of exercises {total} </p>
    )
  }
  
    //ei ole ehkä paras tapa käyttää parts nimeä useaan kertaan mutta en nyt muutakaan keksinyt
    return (
      <div>
        <Header headertext={course} />
        <Content parts={parts} />
        <Footer parts={parts} />
      </div>
    )
  }

export default App