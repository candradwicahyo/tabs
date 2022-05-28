window.onload = () => {
  
 const button = document.querySelectorAll('.btn-tabs');
 button.forEach(btn => {
   btn.addEventListener('click', function() {
     button.forEach(btn => btn.classList.remove('active'));
     this.classList.add('active');
     filter(this.textContent);
   });
 });
 
 function filter(param) {
   const wrappers = document.querySelectorAll('.wrapper');
   wrappers.forEach(wrapper => {
     const type = wrapper.dataset.type;
     wrapper.style.display = (param.toLowerCase() == type.toLowerCase()) ? 'block' : 'none';
   });
 }
  
}