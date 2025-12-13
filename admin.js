async function load(){
const {data}=await supabase.from("orders").select("*").order("created_at",{ascending:false});
const box=document.getElementById("orders");
data.forEach(o=>{
box.innerHTML+=`<p><b>${o.customer_name}</b> | ₹${o.total}</p>`;
});
}
load();