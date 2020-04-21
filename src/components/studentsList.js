import React, { Component, useState } from 'react'
import './styles.css'

import Search from './search'
import AddStudent from './addStudents'
import StudentTable from './studentTable'
import Delete from './delete'

class StudentList extends Component {

    state = {
        studentList: [],
        searchList: [],
        input: '',
        id: '',
        fName: '',
        lName: '',
        aggr: '',
        pos: 0,
        idToDelete: '',
    }

    componentDidMount() {
        const { lists } = this.props
        this.setState({
            studentList: [...lists],
            pos: lists.length + 1,
        })
    }

    //-------Function to seach the Name--------
    onSearchHandler = (event) => {
        const { studentList, input } = this.state
        const searchString = event.target.value;
        this.setState({
            input: searchString
        })
        const searchList = studentList.filter(item => {
            return item.firstName.toLowerCase().concat(item.lastName.toLowerCase()).includes(input.toLowerCase())
        })
        if (searchList == '') { alert("no data found") }
        this.setState({
            searchList: searchList
        })
    }

    //-------Function to clear Search Box--------
    clearHandler = () => {
        const { studentList } = this.state
        this.setState({
            input: '',
            searchList: [],
            studentList: studentList
        })
    }

    //------Function takes the position to add data to corresponding position------
    positionHandler = (event) => {
        const pos = event.target.value
        this.setState({ pos: pos })
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
                studentList: newList,
                idToDelete: '',
                pos: newList.length + 1
            })
        }
    }

    //--------Function to delete corresponding data in a row-------
    delButtonRow = (index) => {
        let { studentList } = this.state
        studentList.splice(index, 1)
        this.setState({
            studentList: studentList,
            pos: studentList.length + 1
        })
    }

    //------Function to delete data in a searched list-------- 
    delButtonSearchRow = (id) => {
        let { studentList } = this.state
        const newList = studentList.filter(item => item.id != id)
        this.setState({
            studentList: newList,
            searchList: [],
            pos: newList.length + 1,
            input: ''
        })
    }

    //-------Function to take Id for new data------- 
    newIdHandler = (event) => {
        const newId = event.target.value
        this.setState({ id: newId })
    }

    //-------Function to take First Name for new data-------
    firstNameHandler = (event) => {
        const fname = event.target.value
        this.setState({ fName: fname })
    }

    //-------Function to take Last Name for new data-------
    lastNameHandler = (event) => {
        const lname = event.target.value
        this.setState({ lName: lname })
    }

    //-------Function to take Aggregate for new data-------
    aggregateHandler = (event) => {
        const aggr = event.target.value
        this.setState({ aggr: aggr })
    }

    //-------Function for add button--------
    addValues = () => {
        const { studentList, id, fName, lName, aggr, pos } = this.state;
        studentList.splice(pos - 1, 0, { id: id, firstName: fName, lastName: lName, Aggregate: aggr + '%' })
        this.setState({
            studentList: studentList,
            id: '', fName: '', lName: '', pos: studentList.length + 1, aggr: ''
        })
    }

    editHandler = (item) => {   
        const {index, id, fName, lName, aggr} = item
        const {studentList} = this.state
        studentList.splice(index, 1,{id: id, firstName: fName, lastName: lName, Aggregate: aggr})
        this.setState({
            studentList:studentList
        })
    }
    render() {
        return (
            <div>
                <Search
                    input={this.state.input}
                    onSearchHandler={this.onSearchHandler}
                    clearHandler={this.clearHandler} />
                <div className="table">
                    <StudentTable
                        searchList={this.state.searchList}
                        studentList={this.state.studentList}
                        delButtonRow={this.delButtonRow}
                        delButtonSearchRow={this.delButtonSearchRow}
                        editHandler={this.editHandler} />
                </div>
                <div className="add">
                    <AddStudent
                        pos={this.state.pos}
                        positionHandler={this.positionHandler}
                        id={this.state.id}
                        newIdHandler={this.newIdHandler}
                        fName={this.state.fName}
                        firstNameHandler={this.firstNameHandler}
                        lName={this.state.lName}
                        lastNameHandler={this.lastNameHandler}
                        aggr={this.state.aggr}
                        aggregateHandler={this.aggregateHandler}
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