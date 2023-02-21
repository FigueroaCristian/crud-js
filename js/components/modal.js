export default class Modal {
 constructor() {
  this.title = document.getElementById('modal-tile');
  this.description = document.getElementById('modal-description');
  this.btn = document.getElementById('modal-btn');
  this.completed = document.getElementById('modal-completed');
 }
 Onclick() {
  this.btn.onclick = ()=> {
   if(this.title.value === '' || this.description.value === '') {
    this.alert.show("los datos son requeridos!");
    return;
   }
   $("#modal").modal('toggle');
  }
 }
}