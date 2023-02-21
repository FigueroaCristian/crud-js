import Alert from './Alert.js';

export default class AddTodoForm {
 constructor() {
   this.title = document.getElementById("title");
   this.description = document.getElementById("description");
   this.btn = document.getElementById("add");
   this.alert = new Alert("los datos son requeridos");
 }
 onClick(callback) {
  this.btn.onclick = ()=> {
   if(this.title.value === '' || this.description.value === '') {
    this.alert.show("los datos son requeridos!");
   }else {
    callback(this.title.value , this.description.value);
   }
  }
 }
}