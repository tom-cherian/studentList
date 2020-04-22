import React, { Component } from 'react'
import './styles.css'

import Search from './search'
import AddStudent from './addStudents'
import StudentTable from './studentTable'
import Delete from './delete'

class StudentList extends Component {

    state = {
        studentList: [],
        searchList: [],
        searchInput: '',
        idToDelete: '',
        editingIndex: '',
        newStudentData: {
            id: '',
            fName: '',
            lName: '',
            aggr: '',
            pos: 0
        }
    }

    componentDidMount() {
        const { lists } = this.props
        this.setState({
            studentList: [...lists],
            newStudentData : {
            pos: lists.length + 1,
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
                studentList: studentList,
                searchInput: ''
            })
        }
        this.setState({
            searchList: searchList
        })
    }

    //-------Function to clear Search Box--------
    clearHandler = () => {
        const { studentList } = this.state
        this.setState({
            searchInput: '',
            searchList: [],
            studentList: studentList
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
                searchList: [],
                searchInput: '',
                studentList: newList,
                idToDelete: '',
                newStudentData:{
                pos: newList.length + 1
                }
            })
        }
    }

    //--------Function to delete corresponding data in a row-------
    delButtonRow = (id) => {
        let { studentList } = this.state
        const newList = studentList.filter(item => item.id != id)
        debugger
        this.setState({
            studentList: newList,
            searchList: [],
            searchInput: '',
            newStudentData:{
                pos: newList.length + 1
                }
        })

    }

    //-------Function to handle datas of new student------------------- 
    newStudentDataHandler = (event) => {
        debugger
        const { name, value } = event.target
        this.setState(prevState => ({
            newStudentData: {
                ...prevState.newStudentData,
                [name]: value
            }
        })
        )
        console.log(this.state.newStudentData)
    }

    //-------Function for add button--------
    addValues = () => {
        const { studentList, newStudentData } = this.state;
        const { id, fName, lName, aggr, pos } = newStudentData

        let idIsNotValid = this.idValidation(id)

        if (idIsNotValid) {
            alert('id should be entered or the id entered exists')
            this.setState({
                
                newStudentData: {
                    id: '', fName: '', lName: '', aggr: '', pos: studentList.length + 1,
                }
            })
        }
        else {
            studentList.splice(pos - 1, 0, { id: id, firstName: fName, lastName: lName, Aggregate: aggr + '%' })
            this.setState({
                studentList: studentList,
                newStudentData: {
                    id: '', fName: '', lName: '', aggr: '', pos: studentList.length + 1
                }
            })
        }
    }

    //--------Function to edit data of a student-----------
    editHandler = (item) => {
        const { id, fName, lName, aggr } = item
        const { studentList, editingIndex } = this.state

        let idIsNotValid = this.idValidation(id)

        if (idIsNotValid) { alert('id should be entered or id exists') }
        else {
            const index = editingIndex
            studentList.splice(index, 1, { id: id, firstName: fName, lastName: lName, Aggregate: aggr })
            this.setState({
                studentList: studentList,
                searchList: [],
                searchInput: ''
            })
        }
    }

    //-------Function to take the index of editing data-----------
    setIndex = (id) => {
        const { studentList } = this.state
        const findIndex = studentList.findIndex(item => item.id === id)

        this.setState({
            editingIndex: findIndex
        })
    }

    //------Function for id validation------------
    idValidation = (id) => {
        const { studentList } = this.state
        const fullId = studentList.map(item => item.id)
        const check = (fullId.includes(+id) || (id == !id)) && (id === '')  
        return check
    }


    render() {
        return (
            <div>
                <Search
                    searchInput={this.state.searchInput}
                    onSearchHandler={this.onSearchHandler}
                    clearHandler={this.clearHandler} />
                <div className="table">
                    <StudentTable
                        searchList={this.state.searchList}
                        studentList={this.state.studentList}
                        delButtonRow={this.delButtonRow}
                        editHandler={this.editHandler}
                        setIndex={this.setIndex} />
                </div>
                <div className="add">
                    <AddStudent
                        newStudentDataHandler={this.newStudentDataHandler}
                        newStudentData={this.state.newStudentData}
                        addValues={this.addValues} />
                    <Delete
                        idToDelete={this.state.idToDelete}
                        deleteIdHandler={this.deleteIdHandler}
                        onDeleteUsingId={this.onDeleteUsingId} />
                </div>

            </div>
        );
    };
}
export default StudentList;