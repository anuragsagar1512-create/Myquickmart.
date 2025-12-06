
// bottom navigation
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
document.querySelectorAll('.nav-item').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.nav-item').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const page = btn.dataset.page;
    showPage(page);
  });
});

// catalogue tabs
const catTabs = document.querySelectorAll('.cat-tab');
const catViews = document.querySelectorAll('.cat-view');

catTabs.forEach(tab=>{
  tab.addEventListener('click', ()=>{
    catTabs.forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');

    const target = tab.dataset.tab;
    catViews.forEach(v=>{
      if(v.id === target){ v.classList.add('active'); }
      else { v.classList.remove('active'); }
    });
  });
});

// product search
const searchInput = document.getElementById('productSearch');
if (searchInput){
  searchInput.addEventListener('input', ()=>{
    const term = searchInput.value.toLowerCase();
    document.querySelectorAll('.product-card').forEach(card=>{
      const name = card.dataset.name || '';
      card.style.display = name.includes(term) ? 'block' : 'none';
    });
  });
}
