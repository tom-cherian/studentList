import React from 'react';
import './App.css';
import StudentsList from './components/studentsList'
import 'bootstrap/dist/css/bootstrap.min.css';

const students = [
  { id: 1, firstName: 'Tom', lastName: 'Cherian', aggregate: '75%'},
  { id: 2, firstName: 'Jithu', lastName: 'Jose', aggregate: '80%'},
  { id: 3, firstName: 'Arun', lastName: 'George', aggregate: '82%'},
  { id: 4, firstName: 'Krishnadev', lastName: 'M P', aggregate: '78%'},
];


const App = () => {    
    return (
      <div >
        <h2>List of Students</h2>
        <StudentsList lists={students} />
      </div>
    );
  }

export default App;
