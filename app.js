const titles={overview:'Dashboard de recherche',edges:'Edges & validation',journal:'Trade journal',data:'Data vault'};
const nav=[...document.querySelectorAll('.nav-item')];
nav.forEach(button=>button.addEventListener('click',()=>{nav.forEach(item=>item.classList.remove('active'));document.querySelectorAll('.view').forEach(view=>view.classList.remove('active'));button.classList.add('active');document.getElementById(button.dataset.view).classList.add('active');document.getElementById('page-title').textContent=titles[button.dataset.view];}));
const dialog=document.getElementById('trade-dialog');
document.getElementById('trade-spec-btn').addEventListener('click',()=>dialog.showModal());
dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
