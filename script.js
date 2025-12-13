let cart=[];
async function loadProducts(){
const {data}=await supabase.from("products").select("*");
const box=document.getElementById("products");
box.innerHTML="";
data.forEach(p=>{
box.innerHTML+=`
<div class='card'>
<img src='${p.image}'>
<h4>${p.name}</h4>
<p>₹${p.price}</p>
<p>Stock: ${p.stock}</p>
<button ${p.stock<=0?'disabled':''} onclick="add('${p.name}',${p.price})">Add</button>
</div>`;
});
}
loadProducts();
function add(n,p){cart.push({name:n,price:p});alert(n+' added');}
async function placeOrder(){
let n=name.value,ph=phone.value,a=address.value;
let total=cart.reduce((s,i)=>s+i.price,0);
await supabase.from("orders").insert([{customer_name:n,phone:ph,address:a,items:cart,total}]);
let txt=cart.map(i=>i.name+' ₹'+i.price).join('%0A');
window.open(`https://wa.me/917042504514?text=New Order%0A${txt}%0ATotal ₹${total}`);
}