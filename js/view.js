import addTodoForm from './components/addTodos.js';

export default class View  {
 constructor() {
  this.model = null;
  this.btn = document.getElementById("add");
  this.alert = document.getElementById("alert");
  this.addTodoFrom = new addTodoForm();
  this.addTodoFrom.onClick((tile,description) => this.AddTodos(tile,description));
 }
 setModel(model) {
  this.model = model;
 }
 AddTodos(title,description) {
   const todo = this.model.getTodos(title,description);
   this.createRow(todo);
 }
 removeTodo(id) {
  this.model.removeTodo(id);
  document.getElementById(id).remove();
 }
 createRow(todo) {
  this.alert.classList.add("d-none");
    const row = table.insertRow();
    row.setAttribute('id', todo.id);
    row.innerHTML = `
    <td>
    ${todo.title}
  </td>
  <td>
    ${todo.description}
  </td>
  <td class="text-center">
    <input type="checkbox">
  </td>
  <td class="text-right">
    <button class="btn btn-primary mb-1">
      <i class="fa fa-pencil"></i>
    </button>
  </td>
    `;
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('btn', 'btn-danger', 'ml-1');
    removeBtn.innerHTML = `<li class="fa fa-trash"></li>`;
    removeBtn.onclick = ()=> this.removeTodo(todo.id);
    row.children[3].appendChild(removeBtn);
 }
}