export default class AddTodoForm {
 constructor() {
   this.title = document.getElementById("title");
   this.description = document.getElementById("description");
   this.btn = document.getElementById("add");
 }
 onClick(callback) {
  this.btn.onclick = ()=> {
   if(this.title.value === '' || this.description.value === '') {
    console.error('los datos son requeridos');
   }else {
    callback(this.title.value , this.description.value);
   }
  }
 }
}