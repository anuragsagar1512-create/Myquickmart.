let cart=[];

async function loadProducts(){
const {data}=await supabase.from("products").select("*");
const box=document.getElementById("products");
box.innerHTML="";
data.forEach(p=>{
box.innerHTML+=`<div class='product'>
<img src='${p.image}'>
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<p>Stock: ${p.stock}</p>
<button ${p.stock<=0?"disabled":""} onclick="addToCart('${p.name}',${p.price})">Add to Cart</button>
</div>`;
});
}
loadProducts();

function addToCart(n,p){
cart.push({name:n,price:p});
alert(n+" cart me add ho gaya");
}

async function placeOrder(){
const name=document.getElementById("name").value;
const phone=document.getElementById("phone").value;
const address=document.getElementById("address").value;
const total=cart.reduce((s,i)=>s+i.price,0);

await supabase.from("orders").insert([{
customer_name:name,
phone,
address,
items:cart,
total
}]);

let items=cart.map(i=>"- "+i.name+" ₹"+i.price).join("%0A");

window.open(
`https://wa.me/917042504514?text=🛒 New Order - My Quick Mart%0A👤 ${name}%0A📞 ${phone}%0A🏠 ${address}%0A📦 Items:%0A${items}%0A💰 Total ₹${total}`,
"_blank"
);

alert("Order placed successfully");
}