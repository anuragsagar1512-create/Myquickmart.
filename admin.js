async function load(){
const {data}=await supabase.from("orders").select("*").order("created_at",{ascending:false});
const o=document.getElementById("o");
data.forEach(x=>{o.innerHTML+=`<p>${x.customer_name} - ₹${x.total}</p>`});
}
load();