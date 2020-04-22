import React from 'react'

const Delete = (props) => {
    const { idToDelete, deleteIdHandler, onDeleteUsingId } = props
    return (
        <div>
            <label>Enter the Id to delete : </label>
            <input value={ idToDelete } type="number" onChange={ deleteIdHandler  } />
            <button className="Delete" onClick={ onDeleteUsingId }> Delete </button>
        </div>
    )
}

export default Delete