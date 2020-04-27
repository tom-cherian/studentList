import React, { Fragment } from 'react'

import Delete from './delete'
import Search from './search'

const StudentTable = (props) => {
    const { delButtonRow, toggle, modalDataHandler, showList, searchInput, onSearchHandler, clearHandler, idToDelete, deleteIdHandler, onDeleteUsingId } = props
    return (
        <Fragment>
            <Search
                searchInput={searchInput}
                onSearchHandler={onSearchHandler}
                clearHandler={clearHandler} />
            <br />
            <div className="table" >
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
                    {showList.map((item, index) =>
                        <tbody key={index}>
                            <tr>
                                <td className="Row" >{index + 1} </td>
                                <td className="Row" >{item.id} </td>
                                <td className="Row" >{item.firstName} </td>
                                <td className="Row" >{item.lastName} </td>
                                <td className="Row" >{item.aggregate} </td>
                                <td className="Row Delete" onClick={() => delButtonRow(item.id)}>Delete</td>
                                <td className="Row" >
                                    <button onClick={() => { toggle(); modalDataHandler(item.id) }} > Edit </button>
                                </td>
                            </tr>
                        </tbody>)
                    }
                </table>
                <br />
                <Delete
                    idToDelete={idToDelete}
                    deleteIdHandler={deleteIdHandler}
                    onDeleteUsingId={onDeleteUsingId} />
            </div>

        </Fragment>
    )
}

export default StudentTable;
