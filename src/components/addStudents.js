import React from 'react';

const AddStudent = (props) => {
    return (
        <div>
            <label>Enter the position: </label><br />
            <input placeholder='Enter the Position' value={props.pos} type="number" onChange={props.positionHandler} />
            <br />
            <label>Enter the id: </label><br />
            <input placeholder='Enter the id' value={props.id} type="number" onChange={props.newIdHandler} />
            <br />
            <label>Enter First Name: </label><br />
            <input placeholder='First Name' value={props.fName} type="text" onChange={props.firstNameHandler} />
            <br />
            <label>Enter Last Name: </label><br />
            <input placeholder='Last Name' value={props.lName} type="text" onChange={props.lastNameHandler} />
            <br />
            <label>Enter Aggregate: </label><br />
            <input placeholder='Aggregate' value={props.aggr} type="number" onChange={props.aggregateHandler} />
            <br />
            <button onClick={props.addValues}>Add</button><br /><br />
        </div>
    )
}

export default AddStudent;