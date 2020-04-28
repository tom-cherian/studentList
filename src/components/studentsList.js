import React, { Component, Fragment } from 'react'
import './styles.css'

import StudentTable from './studentTable'
import EditModal from './editModal'
import Navbar from './navbar'

const students = [
    { id: 1, firstName: 'Tom', lastName: 'Cherian', aggregate: '75%'},
    { id: 2, firstName: 'Jithu', lastName: 'Jose', aggregate: '80%'},
    { id: 3, firstName: 'Arun', lastName: 'George', aggregate: '82%'},
    { id: 4, firstName: 'Krishnadev', lastName: 'M P', aggregate: '78%'},
  ];

class StudentList extends Component {

    state = {
        studentList: [...students],
        showList: [],
        searchInput: '',
        idToDelete: '',
        isOpen: false,
        newStudentData: {
            id: '',
            fName: '',
            lName: '',
            aggr: 0,
            position: 0
        },
        currentSelectedItem: {
            id: '',
            fName: '',
            lName: '',
            aggr: ''
        }
    }

    componentDidMount() {
        const { studentList } = this.state
        this.setState({
            showList: [...studentList],
            newStudentData: {
                position: studentList.length + 1,
            }
        })
    }

    //-------Function to seach the Name--------
    onSearchHandler = (event) => {
        const { studentList, searchInput } = this.state
        const searchString = event.target.value;
        this.setState({
            searchInput: searchString
        })
        const searchList = studentList.filter(item => {
            return item.firstName.toLowerCase().concat(item.lastName.toLowerCase()).includes(searchInput.toLowerCase())
        })
        if (searchList == '') {
            alert("no data found")
            this.setState({
                showList: studentList,
                searchInput: ''
            })
        }
        else {
            this.setState({
                showList: searchList
            })
        }
    }

    //-------Function to clear Search Box--------
    clearHandler = () => {
        const { studentList } = this.state
        this.setState({
            searchInput: '',
            showList: studentList
        })
    }

    //------Function to take the id of data to be deletd --------
    deleteIdHandler = (event) => {
        const idToDelete = event.target.value
        this.setState({ idToDelete: idToDelete })
    }

    //-------Function to delete data using corresponding enterd id-------
    onDeleteUsingId = () => {
        const { idToDelete, studentList } = this.state
        const newList = studentList.filter(item => item.id != idToDelete)
        if (newList.length == studentList.length) {
            alert("there no id like you entered")
            this.setState({ idToDelete: '' })
        } else {
            this.setState({
                searchInput: '',
                studentList: newList,
                showList: newList,
                idToDelete: '',
                newStudentData: {
                    position: newList.length + 1
                }
            })
        }
    }

    //--------Function to delete corresponding data in a row-------
    delButtonRow = (id) => {
        let { studentList } = this.state
        const newList = studentList.filter(item => item.id != id)
        this.setState({
            studentList: newList,
            showList: newList,
            searchInput: '',
            newStudentData: {
                position: newList.length + 1
            }
        })

    }

    //-------Function to handle datas of new student------------------- 
    newStudentDataHandler = (event) => {
        const { name, value } = event.target
        this.setState(prevState => ({
            newStudentData: {
                ...prevState.newStudentData,
                [name]: value
            }
        })
        )
    }

    //-------Function for add button--------
    addValues = () => {
        const { studentList, newStudentData } = this.state;
        const { id, fName, lName, aggr, position } = newStudentData
        const existingIds = studentList.map(item => item.id)
        if (id) {
            if (existingIds.includes(+id)) {
                alert('Id already exists')
                this.setState({
                    newStudentData: {
                        id: '', fName: '', lName: '', aggr: '', position: studentList.length + 1,
                    }
                })
            }
            else {
                studentList.splice(position - 1, 0, { id: +id, firstName: fName, lastName: lName, aggregate: aggr === undefined ? 0 + "%" : +aggr + '%' })
                this.setState({
                    studentList: studentList,
                    showList: studentList,
                    newStudentData: {
                        id: '', fName: '', lName: '', aggr: '', position: studentList.length + 1
                    }
                })
                console.log(studentList)
                console.log(existingIds)
            }
        }
        else {
            alert('Id required')
            this.setState({
                newStudentData: {
                    id: '', fName: '', lName: '', aggr: '', position: studentList.length + 1,
                }
            })
        }
    }

    //--------Function to edit data of a student-----------
    editHandler = (item) => {
        const { id, fName, lName, aggr } = item
        const { studentList, currentSelectedItem } = this.state
        const existingIdDatas = studentList.filter(item => item.id != currentSelectedItem.id)
        const existingIds = existingIdDatas.map(item => item.id)
        if (id) {
            if (existingIds.includes(+id)) {
                alert('Id already exists')
            } else {
                const editingId = currentSelectedItem.id
                const index = studentList.findIndex(item => item.id === editingId)
                studentList.splice(index, 1, { id: id, firstName: fName, lastName: lName, aggregate: aggr })
                this.setState({
                    studentList: studentList,
                    showList: studentList,
                    searchInput: ''
                })
            }
        }
        else {
            alert('Enter an Id')
        }
    }

    //-------Function to toggle the state of modal for editing-----------
    toggle = () => {
        const prevState = this.state.isOpen
        this.setState({
            isOpen: !prevState,
            currentSelectedItem: {
                id: '', fName: '', lName: '', aggr: ''
            }
        })
    }

    //--------Function to pass selected item's data to modal
    modalDataHandler = (itemId) => {
        const { studentList } = this.state
        const modalData = studentList.filter(item => item.id == +itemId)
        const { id, firstName, lastName, aggregate } = modalData[0]
        this.setState({
            currentSelectedItem: {
                id: id,
                fName: firstName,
                lName: lastName,
                aggr: aggregate
            }
        })
    }


    render() {
        return (
            <Fragment>
                <Navbar />
                <StudentTable
                    showList={this.state.showList}
                    delButtonRow={this.delButtonRow}
                    toggle={this.toggle}
                    modalDataHandler={this.modalDataHandler}
                    searchInput={this.state.searchInput}
                    onSearchHandler={this.onSearchHandler}
                    clearHandler={this.clearHandler}
                    idToDelete={this.state.idToDelete}
                    deleteIdHandler={this.deleteIdHandler}
                    onDeleteUsingId={this.onDeleteUsingId}
                />
                {/* </Route> */}
                {/* <Route path="/addStudent"> */}
                {/* <AddStudent
                    newStudentDataHandler={this.newStudentDataHandler}
                    newStudentData={this.state.newStudentData}
                    addValues={this.addValues} /> */}
                {/* </Route> */}
                {/* </Switch> */}
                {/* </div> */}
                {/* </Router> */}
                <EditModal
                    isOpen={this.state.isOpen}
                    toggle={this.toggle}
                    currentSelectedItem={this.state.currentSelectedItem}
                    editHandler={this.editHandler} />
            </Fragment>
        );
    };
}
export default StudentList;