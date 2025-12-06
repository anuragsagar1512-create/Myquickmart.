
// bottom navigation
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
}
document.addEventListener('DOMContentLoaded', () => {
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
        const name = (card.dataset.name || '').toLowerCase();
        card.style.display = name.includes(term) ? 'block' : 'none';
      });
    });
  }

  // open new product page
  const fab = document.getElementById('openNewProduct');
  if (fab){
    fab.addEventListener('click', ()=>{
      showPage('newProductPage');
    });
  }

  // back from new product to catalogue
  const backBtn = document.getElementById('backToCatalogue');
  if (backBtn){
    backBtn.addEventListener('click', ()=>{
      showPage('cataloguePage');
    });
  }

  // image upload logic
  const imageInput = document.getElementById('productImageInput');
  const imageInfo = document.getElementById('imageInfo');
  const imagePreview = document.getElementById('imagePreview');

  if (imageInput){
    imageInput.addEventListener('change', ()=>{
      const files = Array.from(imageInput.files || []);
      if (files.length === 0){
        imageInfo.textContent = 'No image selected';
        imagePreview.innerHTML = '';
        return;
      }
      if (files.length > 6){
        alert('Maximum 6 images allowed. Extra files will be ignored.');
      }
      const used = files.slice(0,6);
      imageInfo.textContent = used.length + ' image(s) selected';
      imagePreview.innerHTML = '';
      const first = used[0];
      if (first){
        const url = URL.createObjectURL(first);
        const img = document.createElement('img');
        img.src = url;
        imagePreview.appendChild(img);
      }
    });
  }

  const addImageBox = document.getElementById('addImageBox');
  if (addImageBox && imageInput){
    addImageBox.addEventListener('click', ()=>{
      imageInput.click();
    });
  }

  // bottom image action buttons
  document.querySelectorAll('.image-action-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      if (imageInput) imageInput.click();
    });
  });

});
