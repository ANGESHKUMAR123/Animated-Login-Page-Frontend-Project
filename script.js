 const container = document.querySelector('.container');
 const registerBtn = document.querySelector('.btn-register');
 const loginBtn = document.querySelector('.btn-login');

 registerBtn.addEventListener('click', () => {
    container.classList.add('active');
 });
  loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
 });

 // Login Form Show/Hide Password
 const toggleLoginPass = document.getElementById('toggleLoginPass');
 const loginPassInput = document.getElementById('pass');
 toggleLoginPass.addEventListener('click', () => {
    if(loginPassInput.type === 'password') {
       loginPassInput.type = 'text';
       toggleLoginPass.classList.remove('fa-eye');
       toggleLoginPass.classList.add('fa-eye-slash');
    } else {
       loginPassInput.type = 'password';
       toggleLoginPass.classList.remove('fa-eye-slash');
       toggleLoginPass.classList.add('fa-eye');
    }
 });

 // Register Form Show/Hide Password
 const toggleRegPass = document.getElementById('toggleRegPass');
 const regPassInput = document.getElementById('regPass');
 toggleRegPass.addEventListener('click', () => {
    if(regPassInput.type === 'password') {
       regPassInput.type = 'text';
       toggleRegPass.classList.remove('fa-eye');
       toggleRegPass.classList.add('fa-eye-slash');
    } else {
       regPassInput.type = 'password';
       toggleRegPass.classList.remove('fa-eye-slash');
       toggleRegPass.classList.add('fa-eye');
    }
 });

 function checkLogin(){
   let user = document.getElementById("user").value.trim();
   let pass = document.getElementById("pass").value.trim();
   let loginError = document.getElementById("loginError");

   if (user === "" || pass === ""){
      loginError.style.display = "block";
      return false;
   }
   loginError.style.display = "none";
   return true;
 }

 function checkRegister(){
   let regUser = document.getElementById("regUser").value.trim();
   let regEmail = document.getElementById("regEmail").value.trim();
   let regPass = document.getElementById("regPass").value.trim();
   let registerError = document.getElementById("registerError");

   if (regUser === "" || regEmail === "" || regPass === ""){
      registerError.style.display = "block";
      return false;
   }
   registerError.style.display = "none";
   return true;
 }