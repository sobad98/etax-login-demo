const $=id=>document.getElementById(id);
$("showPass").addEventListener("click",()=>{$("password").type=$("password").type==="password"?"text":"password";});
$("loginForm").addEventListener("submit",e=>{e.preventDefault();const name=$("username").value.trim();if(!name||!$("password").value.trim()){$("loginMsg").textContent="Vui lòng nhập thông tin demo.";return;}$("profileName").textContent=name.toUpperCase();$("loginScreen").hidden=true;$("homeScreen").hidden=false;window.scrollTo({top:0,behavior:"smooth"});});
document.querySelectorAll("[data-info]").forEach(btn=>btn.addEventListener("click",()=>{const target=$("homeScreen").hidden?$("loginMsg"):$("homeMsg");target.textContent=btn.dataset.info+" — chức năng minh họa, chưa kết nối hệ thống thật.";}));
$("menuBtn").addEventListener("click",()=>{$("menu").hidden=!$("menu").hidden;});
$("logoutMenu").addEventListener("click",logout);$("logout").addEventListener("click",logout);
function logout(){$("homeScreen").hidden=true;$("loginScreen").hidden=false;$("password").value="";$("loginMsg").textContent="Bạn đã đăng xuất khỏi bản demo.";window.scrollTo({top:0,behavior:"smooth"});}
