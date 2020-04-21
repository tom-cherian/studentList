import  React , {Component} from 'react';


class Table extends Component{

    state={
        addedItem:[10],
       studentList:[],
            input:'',
       newId:'',
       newindex:'',
       newFirstName:'',
       newlastName:'',
       newmark:'',
       position:''
        
    }
    componentDidMount(){
        const {lists} = this.props
        console.log("###",this.props)
        this.setState({
            studentList:[...lists]
        })
    }
  
    viewList=()=>(<table>
        <thead><tr><th>Id</th>
        <th>First_Name</th>
<th>Last_Name</th>
<th>Aggregate_Mark</th></tr></thead>
   { this.state.studentList.map((student,i)=>(<tbody><tr key={i} >
            <td>{student.Id}</td>
            <td>{student.First_Name}</td>
            <td>{student.Last_Name}</td>
            <td>{student.Aggregate_Mark}</td>
            <td><button  onClick = {()=>{this.deleteRow(i)}}>DELETE</button></td>
            </tr></tbody>    
         ))}
          </table>
          )
            
    searchText=(event)=>{
              const searchString = event.target.value
        console.log("searched value",searchString);
        this.setState({
            input:searchString
        })
                 }
       deleteRow=(i)=>{
           console.log("$$",i)
        this.state.studentList.splice(i,1)
        this.setState({
        studentList:this.state.studentList
        })
       }
        onindexChange=(e)=>{
                       this.setState({
                newindex: e.target.value
                })
        }
        onIdChange=(e)=>{
            this.setState({
     newId: e.target.value
     })
}
        onfirstNameChange=(e)=>{
            this.setState({
     newFirstName: e.target.value
     })
}
onlastNameChange=(e)=>{
    this.setState({
newlastName: e.target.value
})
}
onmarkChange=(e)=>{
    this.setState({
newmark: e.target.value
})
}

    findText=()=>{
     const list=  this.state.studentList.filter((item)=>{
              return item.First_Name.toLowerCase().concat(item.Last_Name.toLowerCase()).includes(this.state.input.toLowerCase())
            })
            console.log("list",list)
    this.setState({
          studentList:list
    })
  }
clearText=()=>{
    this.setState({
        studentList:this.props.Student,
        input:" "
    })
}
onpositionChange=(e)=>{
    this.setState({
       position: e.target.value
    })
}
addItem=()=>{
    const newData = []
        newData.push({Id:this.state.newId,First_Name:this.state.newFirstName,Last_Name:this.state.newlastName,Aggregate_Mark:this.state.newmark})
this.state.studentList.splice(this.state.newindex,0,...newData)
 this.setState({
 studentList:this.state.studentList,
 index:"",
id:"",
first_Name:"",
last_Name:"",
aggregate_Mark:""
 })
}
    render(){
        
    return (<div>     <div>
           <h1 > student Table</h1>
          
                 {this.viewList()}
                 
           <input type ="text" value={this.state.input} onChange={this.searchText}></input>
        <button onClick = {this.findText}>Search</button>
        <button onClick = {this.clearText}>Clear</button>
           
        </div>
        <div>
      <form className="form-inline" > 
          <div className="form-group">
        <label>Row No:</label><br/>
      <input type="Number" name='index' onChange={this.onindexChange} placeholder="index" value={this.state.index}/><br/>
<label>Id:</label><br/>
<input type="Number"  name="id" placeholder="Id" onChange={this.onIdChange} value={this.state.id}/><br/>
<label>First Name:</label><br/>
      <input type="Text" name="first_Name" onChange={this.onfirstNameChange} placeholder="First Name" value={this.state.first_Name}/><br/>
      <label>Last Name:</label><br/>
      <input type="Text" name="last_Name" onChange={this.onlastNameChange} placeholder="Last Name" value={this.state.last_Name} /><br/>
      <label>Aggregate Mark:</label><br/>
      <input type="Number" name="aggregate_Mark" onChange={this.onmarkChange} placeholder="Aggregate Mark"  value={this.state.aggregate_Mark}/><br/>
<button type="button" onClick={()=>{this.addItem()}}>Add</button><br/>
<label>Row No:</label><br/>
      <input type="Number" name='position' onChange={this.onpositionChange} placeholder="index of row to delete" value={this.state.position}/>
      <button  onClick = {()=>{this.deleteRow(this.state.position-1)}}>DELETE</button><br/>



</div> 

      </form>
         
        </div>
        </div>
   
     )
           
}
}
          export default Table;
