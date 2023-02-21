export default class Alert {
 constructor() {
  this.alert = document.getElementById('alert');
 }
 show(menssage) {
  this.alert.classList.remove('d-none');
  this.alert.innerText = menssage;
 }
 hide() {
  this.alert.classList.add('d-none');
 }
}