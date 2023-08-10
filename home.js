const home={template:`

<router-link to="/home" replace>الدخول الى البرنامج</router-link>

<router-view></router-view>






<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <a class="navbar-brand" href="#">روابط ذات صلة</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="https://www.ppf.gov.iq/">مؤسسة السجناء السياسيين</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.google.com/">google</a>
      </li>
      
    </ul>
    
  

  </div>  
</nav>

<div class="container" style="margin-top:10px">
    <div class="jumbotron text-center" style="margin-bottom:0">
       
        <div class="text-center">
        <h2>برنامج الصيانة</h2>
        <h5>للصيانة الدورية في المؤسسة</h5>
        </div>
        <br>
       <div class="view overlay">
        <div class="text-center">
            <img src="C:\Users\Rahma\source\repos\Photos\az.jpg" class="img-fluid" alt="Responsive image">
  
        </div>
        </div>
        </div>
    
    <div class="text-center">
        <h3>
      نبذة عن البرنامج ...
    </h3>
    </div>
    <h5>
        <div class="text-center">
      <p>صمم هذا التطبيق لتحديد الاعطال المادية والبرمجية لكل قسم وتسجيلها في استمارة ليتم صيانتها وتحديثها بشكل دوري.</p>
    </div>
    </h5>
      <br>
      <div class="text-center">
        
          <router-link class="btn btn-light btn-outline-primary"
          to="/employee" hre="#">انشاء استمارة</router-link>
          
    </div>
    
  

  
  <ul class="pagination">
    <li class="nav-item m-1">
        <router-link class="btn btn-light btn-outline-primary"
        to="/index" hre="#">Previous</router-link>
    </li>
    <li class="nav-item m-1">
        <router-link class="btn btn-light btn-outline-primary"
        to="/employee" hre="#">Next</router-link>
    </li>
  </ul>
  <router-view></router-view>
  `,
}
