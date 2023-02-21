export default class View  {
 constructor() {
  this.model = null;
  this.btn = document.getElementById("add");
  this.btn.onclick = ()=> {
   this.AddTodos('test', 'test1');
  }
 }
 setModel(model) {
  this.model = model;
 }
 AddTodos(title,description) {
  this.model.getTodos(title,description);
 }
}