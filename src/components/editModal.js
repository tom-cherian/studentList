import React, { useState, useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditModal = (props) => {
    const {  editHandler, isOpen, toggle, currentSelectedItem } = props
    const { id , fName, lName, aggr } = currentSelectedItem

    const [student, setEditedValues] = useState({
        editId: id,
        editFName: fName,
        editLName: lName,
        editAggr: aggr
    })
    const onChange = (event) => {
        setEditedValues({
            ...student,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        setEditedValues({
            editId: id,
            editFName: fName,
            editLName: lName,
            editAggr: aggr
        })
    }, [aggr, fName, lName, id]);
console.log('******************************')

    const { editId, editFName, editLName, editAggr } = student
    return (
        
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <label>Enter edited Id:</label><br />
                    <input type="number" name="editId" placeholder="Enter newId" value={editId} onChange={onChange} isRe /><br /><br />
                    <label>Enter edited First Name:</label><br />
                    <input type="text" name="editFName" placeholder="first name" value={editFName} onChange={onChange} /><br /><br />
                    <label>Enter edited Last Name:</label><br />
                    <input type="text" name="editLName" placeholder="last name" value={editLName} onChange={onChange} /><br /><br />
                    <label>Enter edited aggregate:</label><br />
                    <input name="editAggr" placeholder="Aggregate" value={editAggr} onChange={onChange} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary"
                        onClick={() => {
                            editHandler({
                                id: editId,
                                fName: editFName,
                                lName: editLName,
                                aggr: editAggr.endsWith('%') ? editAggr : editAggr + '%'
                            });
                            toggle()
                        }}>
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
    )
}
export default EditModal;