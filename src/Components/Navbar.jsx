
const Navbar = ({setCategory}) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" fs-100>Daily News</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        
        <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory("Technology")}>Technology</div>
        </li>
        <li class="nav-item" >
          <div class="nav-link" onClick={()=>setCategory("Business")} >Business</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory("Health")} >Health</div>
        </li>
        <li class="nav-item">
          <div class="nav-link"  onClick={()=>setCategory("Sports") }>Sports</div>
        </li>
        <li class="nav-item">
          <div class="nav-link"  onClick={()=>setCategory("Entertainment")}>Entertainment</div>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
};

export default Navbar;
