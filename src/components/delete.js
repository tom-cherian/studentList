import React from 'react'

const Delete = (props) => {
    return (
        <div>
            <label>Enter the Id to delete : </label>
            <input value={props.idToDelete} type="number" onChange={props.deleteIdHandler} />
            <button className="Delete" onClick={props.onDeleteUsingId}> Delete </button>
        </div>
    )
}

export default Delete