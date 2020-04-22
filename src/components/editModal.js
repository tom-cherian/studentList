import React, { useState, useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditModal = (props) => {
    const { id, editHandler, firstName, lastName, Aggregate, setIndex } = props

    const [modal, setModal] = useState(false)
    const toggle = () => { setModal(!modal) }

    const [student, setEditedValues] = useState({
        editId: id,
        editFName: firstName,
        editLName: lastName,
        editAggr: Aggregate
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
            editFName: firstName,
            editLName: lastName,
            editAggr: Aggregate
        })
    }, [Aggregate, firstName, lastName, id]);

    const { editId, editFName, editLName, editAggr } = student
    return (
        <div>
            <Button color='primary' onClick={() => { toggle(); setIndex(id) }}> Edit</Button>
            <Modal isOpen={modal} toggle={toggle}>
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
                                fName: editFName.charAt(0).toUpperCase() + editFName.slice(1),
                                lName: editLName.charAt(0).toUpperCase() + editLName.slice(1),
                                aggr: editAggr.endsWith('%') ? editAggr : editAggr + '%'
                            });
                            toggle()
                        }}>
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
export default EditModal;