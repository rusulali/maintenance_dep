const employee={template:`
<div>
<p class="text-center">
<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
 اضافة طلب جديد
</button>
</p>
<table class="table table-striped">
<thead>
    <tr>
        <th>
            تسلسل الطلب
        </th>
        <th>
            مقدم الطلب
        </th>
        <th>
            القسم
        </th>
        <th>
           تاريخ تقديم الطلب
        </th>
        <th>
         نوع العطل
        </th>
        <th>
         نوع الجهاز
        </th>
        <th>
         ملاحظات
        </th>
        
    </tr>
</thead>
<tbody>
    <tr v-for="emp in employees">
        <td>{{emp.EmployeeId}}</td>
        <td>{{emp.EmployeeName}}</td>
        <td>{{emp.Department}}</td>
        <td>{{emp.DateOfJoining}}</td>
        <td>{{emp.Losstype}}</td>
        <td>{{emp.Devicetype}}</td>
        <td>{{emp.Note}}</td>
        
    </tr>
</tbody>
</thead>
</table>
<blockquote class="blockquote text-right">
<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">

    <div class="modal-header">
    
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <p class="text-left">
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
        </p>
    </div>
     
   
<div class="modal-body">



        <div class="p-6 w-10 bd-highlight">
        
      <form>    
    
      <div class="form-group">
      <label for="exampleInputEmail1">اسم مقدم الطلب</label>
      <input type="text" class="form-control"  v-model="EmployeeName" aria-describedby="emailHelp" placeholder="Enter name">
      <p class="text-right">
      <small id="emailHelp" class="text-danger"> *يرجى ادخال اسم مستخدم الجهاز او البرنامج</small>
      </p>
      </div>
      

     <div class="form-group">
     <label for="exampleInputEmail1" >الدائرة والقسم</label>
        <select class="custom-select my-1 mr-sm-2"  v-model="Department" aria-describedby="emailHelp">
        <option value="">Choose...</option>
        <option v-for="dep in departments">
            {{dep.DepartmentName}}
            </option>
        </select>
        <p class="text-right">
        <small id="emailHelp" class="text-danger"> *يرجى اختيار القسم المقدم للطلب</small>
      </p>
        </div>

      <div class="form-group">
      <label for="exampleInputEmail1">تاريخ تقديم الطلب</label>
      <input type="date" class="form-control" v-model="DateOfJoining" aria-describedby="emailHelp" placeholder="Enter name">
      <p class="text-right">
      <small id="emailHelp" class="text-danger">  *يرجى تحديد التاريخ</small>
      </p>
      </div>
 
      

      <div class="form-group">
      <label for="exampleInputEmail1">نوع العطل</label>
         <select class="custom-select my-1 mr-sm-2"  v-model="Losstype" aria-describedby="emailHelp">
         
         <option value="">Choose...</option>
            <option value="Hardware">Hardware</option>
            <option value="Software">Software</option>
            </select>
            <p class="text-right">
            <small id="emailHelp" class="text-danger" >
         <div>*يرجى تحديد نوع العطل:</div>
      
      <div class="row">
  <div>
  Hardware: اذا كان العطل مادي
  </div>
</div>

<!-- Inline level -->
<span class="text-danger" style="max-width: 150px;">
Software: اذا كان العطل برمجي
</span>
</p>
       </small>
       </div>

       <div class="form-group">
       <label for="exampleInputEmail1"> نوع الجهاز او البرنامج</label>
       <input type="text" class="form-control" v-model="Devicetype" aria-describedby="emailHelp" placeholder="Device or Program">
       <p class="text-right">
       <small id="emailHelp" class="text-danger">*يرجى تحديد الجهاز او البرنامج المراد صيانته </small>
       </p>
       </div>
    
       <div class="form-group">
       <label for="exampleFormControlTextarea1">الملاحظات</label>
       <textarea class="form-control" id="Note" rows="3"></textarea>
     </div>
            

     <div>
     <p class="text-center">
     <button type="button" @click="createClick()"
     v-if="EmployeeId==0" class="btn btn-primary">
     ارسال الطلب
     </button>
     </p>
 </div>

   </form>   
   
    </div>
   
    <div>
        <button type="button" @click="updateClick()"
        v-if="EmployeeId!=0" class="btn btn-primary">
        Update
        </button>
    </div>

</div>
</div>
</div>
</blockquote>

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
        this.modalTitle="طلب الصيانة";
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