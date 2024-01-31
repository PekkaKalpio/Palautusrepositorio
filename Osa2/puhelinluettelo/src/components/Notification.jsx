const Notification = ({message, noteColor}) => {
    if (message === null){
        return null
    }
    
    const errorStyle = {
        color : "green"
    }

    if(noteColor){
        errorStyle.color="red"
    } else {
        errorStyle.color="green"
    }
   

    return(
        <div className="error" style={errorStyle}>
            {message}
        </div>
    )
}

export default Notification