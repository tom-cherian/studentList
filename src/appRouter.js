import React, { Component } from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
import Welcome from './components/welcome'
import StudentList from './components/studentsList';
import AddStudent from './components/addStudents'

export default class AppRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/"
                    component={Welcome} />
                <Route path="/home"
                    component={Welcome} />
                <Route path="/studentTable"
                    component={StudentList} />
                <Route path="/addStudent"
                    component={AddStudent} />
            </Switch>
        )
    }
}
