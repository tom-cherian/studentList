import React from 'react'

import EditModal from './editModal'

const StudentTable = (props) => {
    return (
        <table>
            <thead>
                <tr >
                    <th className="Row">Sl No.</th>
                    <th className="Row">Id</th>
                    <th className="Row">Name</th>
                    <th className="Row">Last Name</th>
                    <th className="Row">Aggregate</th>
                    <th className="Row">Delete</th>
                    <th className="Row">Edit</th>
                </tr>
            </thead>
            {props.searchList.length ?
                props.searchList.map((list, index) =>
                    <tbody key={index}>
                        <tr>
                            <td className="Row" >{index + 1} </td>
                            <td className="Row" >{list.id} </td>
                            <td className="Row" >{list.firstName} </td>
                            <td className="Row" >{list.lastName} </td>
                            <td className="Row" >{list.Aggregate} </td>
                            <td className="Row Delete" onClick={() => props.delButtonRow(list.id)}>Delete</td>
                            <td className="Row" >
                                <EditModal
                                    firstName={list.firstName}
                                    lastName={list.lastName}
                                    Aggregate={list.Aggregate}
                                    id={list.id}
                                    editHandler={props.editHandler} />
                            </td>
                        </tr>
                    </tbody>
                ) : props.studentList.map((list, index) =>
                    <tbody key={index}>
                        <tr>
                            <td className="Row" >{index + 1} </td>
                            <td className="Row" >{list.id} </td>
                            <td className="Row" >{list.firstName} </td>
                            <td className="Row" >{list.lastName} </td>
                            <td className="Row" >{list.Aggregate} </td>
                            <td className="Row Delete" onClick={() => props.delButtonRow(list.id)}>Delete</td>
                            <td className="Row">
                                <EditModal
                                    firstName={list.firstName}
                                    lastName={list.lastName}
                                    Aggregate={list.Aggregate}
                                    id={list.id}
                                    editHandler={props.editHandler} />
                            </td>
                        </tr>
                    </tbody>

                )
            }
        </table>
    )
}

export default StudentTable;




// className="Row Edit" onClick={() => props.editHandler(props.show)}