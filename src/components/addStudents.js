import React from 'react';

const AddStudent = (props) => {
    const { addValues, newStudentData, newStudentDataHandler } = props
    const {id, fName, lName, aggr, position} = newStudentData
    return (
        <div className="add">
            <label>Enter the position: </label><br />
            <input placeholder='Enter the Position' name="position" value={position} type="number" onChange={newStudentDataHandler} />
            <br />
            <label>Enter the id: </label><br />
            <input placeholder='Enter the id'  name="id" value={id} type="number" onChange={newStudentDataHandler} />
            <br />
            <label>Enter First Name: </label><br />
            <input placeholder='First Name' name="fName" value={fName} type="text" onChange={newStudentDataHandler} />
            <br />
            <label>Enter Last Name: </label><br />
            <input placeholder='Last Name' name="lName" value={lName} type="text" onChange={newStudentDataHandler} />
            <br />
            <label>Enter Aggregate: </label><br />
            <input placeholder='Aggregate' name="aggr" value={+aggr} type="number" onChange={newStudentDataHandler} />
            <br />
            <button onClick={addValues}>Add</button><br /><br />
        </div>
    )
}

export default AddStudent;