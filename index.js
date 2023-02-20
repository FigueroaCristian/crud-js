document.addEventListener('DOMContentLoaded', ()=> {
   const btn = document.getElementById('add'); 
   const title = document.getElementById('title');
   const description = document.getElementById('description');

   btn.addEventListener('click', ()=> {
      AddTodo();
   });
   const AddTodo = ()=> {
      if(title.value === '' || description.value === '') {
         console.error('los datos son requeridos');
      }else {
         console.log('datos enviados');
      }
   }
});
