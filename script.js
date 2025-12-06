
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
document.querySelectorAll('.nav-item').forEach(btn=>{
  btn.onclick=()=>{
    document.querySelectorAll('.nav-item').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    showPage(btn.dataset.page);
  };
});
