
export default class Model {
 constructor() {
  this.view = null;
  this.todos = [];
 }
 setTodo(view) {
  this.view = view;
 }

 getTodos(tile,description) {
  console.log(tile,description);
 }
}