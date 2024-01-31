const Course = ({course}) => {
    return( 
      <div>
          <Header headertext={course.name} />
          <Content parts={course.parts} />
          <Footer parts={course.parts} />
      </div>
    )
  }
  
  const Header = ({headertext}) => <h1>{headertext}</h1>
    
  const Content = ({parts}) => {
    return(
      <div>
        {parts.map(part => <Part key={part.id} name= {part.name} exercises={part.exercises}/>)}
      </div>
    )
  }
    
  const Part = ({name, exercises}) => <p>{name} {exercises}</p>
  
  const Footer = ({parts}) => {
    const total = parts.reduce((accumulator,part) => accumulator += part.exercises, 0)
    return(
      <b>Total of {total} exercises</b>
    )
  }

  export default Course  