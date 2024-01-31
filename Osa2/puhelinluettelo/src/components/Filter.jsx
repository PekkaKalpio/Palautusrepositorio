const Filter = ({handleFilterChange, findName}) => {
    
    return (
    <div>
        <form>
            Filter shown with
            <input
            value={findName}
            onChange={handleFilterChange}
            />
        </form>
    </div>
    )
  }

export default Filter

