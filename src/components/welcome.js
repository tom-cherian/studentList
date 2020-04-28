import React, { Component, Fragment } from 'react'
import Navbar from './navbar';

export default class Welcome extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <br/>
                <h4>This website shows the list of students</h4>
            </Fragment>
        )
    }
}
