
export default class Model {
 constructor() {
  this.view = null;
  this.todos = [];
  this.currentId = 1;
 }
 setTodo(view) {
  this.view = view;
 }


 getTodos(title,description) {
  const todo = {
   id: this.currentId++,
   title,
   description,
   completed: false
  }
  this.todos.push(todo);
  console.log(this.todos);
  return {...todo};
 }
 removeTodo(id) {
  const Index = this.todos.findIndex(todo => todo.id === id);
  this.todos.slice(Index, 1);
 }
}