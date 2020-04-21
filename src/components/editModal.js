import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditModal = (props) => {
    const { index,  id, editHandler, firstName, lastName, Aggregate } = props

    const[modal,setModal]= useState(false) 
    const toggle = () => {setModal(!modal)}

    const [editId,setEditId] = useState(id)
    const editIdHandler = (event) => {setEditId(event.target.value)}
    
    const [editFName,setEditFName] = useState(firstName)
    const editFNameHandler = (event) => {setEditFName(event.target.value)}

    const [editLName, setEditLName] = useState(lastName)
    const editLNameHandler = (event) => {setEditLName(event.target.value)}

    const [editAggr, setEditAggr] = useState(Aggregate)
    const editAggrHandler = (event) => {setEditAggr(event.target.value)}

    return (
        <div>
            <Button color='primary' onClick={toggle}> Edit</Button>
            <Modal isOpen={modal} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <label>Enter edited Id:</label><br />
                    <input type="number" placeholder="Enter newId" value={editId} onChange={editIdHandler} /><br /><br />
                    <label>Enter edited First Name:</label><br />
                    <input type="text" placeholder="first name" value={editFName}  onChange={editFNameHandler} /><br /><br />
                    <label>Enter edited Last Name:</label><br />
                    <input type="text" placeholder="last name" value={editLName} onChange={editLNameHandler} /><br /><br />
                    <label>Enter edited aggregate:</label><br />
                    <input  placeholder="Aggregate" value={editAggr} onChange={editAggrHandler} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" 
                        onClick={ () => {editHandler({index: index, id: editId, fName: editFName, lName: editLName, aggr: editAggr }); toggle()}}>
                            Save
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
export default EditModal;