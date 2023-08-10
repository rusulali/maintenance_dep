
const employee={template:`




<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>

    <div class="modal-body">
    <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 w-50 bd-highlight">
            <div class="input-group mb-3">
                <span class="input-group-text">UserName</span>
                <input type="text" class="form-control" v-model="EmployeeName">
            </div>

           
            <div class="modal-body">
            <div class="d-flex flex-row bd-highlight mb-3">
                <div class="p-2 w-50 bd-highlight">
                    <div class="input-group mb-3">
                        <span class="input-group-text">password</span>
                        <input type="text" class="form-control" v-model="EmployeeName">
                    </div>
            

            
    </div>
        <button type="button" @click="createClick()"
        v-if="EmployeeId==0" class="btn btn-primary">
        Create
        </button>

        <button type="button" @click="updateClick()"
        v-if="EmployeeId!=0" class="btn btn-primary">
        Update
        </button>
    </div>

</div>
</div>
</div>


</div>


`,

data(){
    return{
        departments:[],
        employees:[],
        modalTitle:"",
        EmployeeId:0,
        EmployeeName:"",
        Department:"",
        DateOfJoining:"",
        PhotoFileName:"anonymous.png",
        Losstype:"",
        Devicetype:"",
        Note:"",
        PhotoPath:variables.PHOTO_URL
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"Employee")
        .then((response)=>{
            this.employees=response.data;
        });

        axios.get(variables.API_URL+"Department")
        .then((response)=>{
            this.departments=response.data;
        });
    },
    addClick(){
        this.modalTitle="Add Employee";
        this.EmployeeId=0;
        this.EmployeeName="";
        this.Department="",
        this.DateOfJoining="",
        this.PhotoFileName="anonymous.png",
        this.Losstype="",
        this.Devicetype="",
        this.Note=""
    },
    editClick(emp){
        this.modalTitle="Edit Employee";
        this.EmployeeId=emp.EmployeeId;
        this.EmployeeName=emp.EmployeeName;
        this.Department=emp.Department,
        this.DateOfJoining=emp.DateOfJoining,
        this.PhotoFileName=emp.PhotoFileName,
        this.Losstype=emp.Losstype,
        this.Devicetype=emp.Devicetype,
        this.Note=emp.Note
    },
    createClick(){
        axios.post(variables.API_URL+"Employee",{
            EmployeeName:this.EmployeeName,
            Department:this.Department,
            DateOfJoining:this.DateOfJoining,
            PhotoFileName:this.PhotoFileName,
            Losstype:this.Losstype,
            Devicetype:this.Devicetype,
            Note:this.Note
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    updateClick(){
        axios.put(variables.API_URL+"Employee",{
            EmployeeId:this.EmployeeId,
            EmployeeName:this.EmployeeName,
            Department:this.Department,
            DateOfJoining:this.DateOfJoining,
            PhotoFileName:this.PhotoFileName,
            Losstype:this.Losstype,
            Devicetype:this.Devicetype,
            Note:this.Note
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    deleteClick(id){
        if(!confirm("Are you sure?")){
            return;
        }
        axios.delete(variables.API_URL+"Employee/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });

    },
    imageUpload(event){
        let formData=new FormData();
        formData.append('file',event.target.files[0]);
        axios.post(
            variables.API_URL+"Employee/savefile",
            formData)
            .then((response)=>{
                this.PhotoFileName=response.data;
            });
    }

},
mounted:function(){
    this.refreshData();
}

}

















































import react, { Fragment, useState } from 'react';
import axios from "axios";
//const Login={template:`
<h1>sign in</h1>


function    Login(){
const [name, setName]= useState("");
const [pass, setpass]= useState("")

const handleNameChange = (value) => {
    setName(value);
};
const handlepassChange  = (value) => {
    setpass(value);
};

const handleLogin = () => {
    const data={
        Username: name,
        Password: pass
    };

const url= 'https://localhost:44376/api/Login/Log';

axios.post(url,data).then((result) =>{
alert(result.data);
}).catch((error)=>{
    alert(error);
})


}

return(
    <Fragment><label>username </label><input 
    type="text"
    id="txtname"
    onChange={(e) => handleNameChange(e.target.value)}
     />  
    <br></br>    
    <label>password </label>
    <input
    type="text"
    id="txtpass"
    placeholder="enter password"
    onChange={(e) => handlepassChange(e.target.value)}
     />  
     <br></br> 
     <br></br> 
     <button onClick={() => handleLogin()}>Login</button></Fragment>

)

}


export default Login;
//`}