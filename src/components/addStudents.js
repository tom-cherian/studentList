import React from 'react';

const AddStudent = (props) => {
    const { pos,id, fName,lName,aggr,positionHandler,newIdHandler,firstNameHandler,lastNameHandler,aggregateHandler, addValues } = props
    return (
        <div>
            <label>Enter the position: </label><br />
            <input placeholder='Enter the Position' value={pos} type="number" onChange={positionHandler} />
            <br />
            <label>Enter the id: </label><br />
            <input placeholder='Enter the id' value={id} type="number" onChange={newIdHandler} />
            <br />
            <label>Enter First Name: </label><br />
            <input placeholder='First Name' value={fName} type="text" onChange={firstNameHandler} />
            <br />
            <label>Enter Last Name: </label><br />
            <input placeholder='Last Name' value={lName} type="text" onChange={lastNameHandler} />
            <br />
            <label>Enter Aggregate: </label><br />
            <input placeholder='Aggregate' value={aggr} type="number" onChange={aggregateHandler} />
            <br />
            <button onClick={addValues}>Add</button><br /><br />
        </div>
    )
}

export default AddStudent;