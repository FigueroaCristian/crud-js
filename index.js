document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("add");
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const alert = document.getElementById("alert");
  const table = document.getElementById("table");
  let id = 1;


  const removeTodo = (id)=> {
    console.log(id);
    document.getElementById(id).remove();
  }

  btn.addEventListener("click", () => {
    AddTodo();
  });
  const AddTodo = () => {
    if (title.value === "" || description.value === "") {
      alert.classList.remove("d-none");
      alert.innerHTML = "los datos son requerdios!";
      return;
    }
    alert.classList.add("d-none");
    const row = table.insertRow();
    row.setAttribute('id', id++);
    row.innerHTML = `
    <td>
    ${title.value}
  </td>
  <td>
    ${description.value}
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
    removeBtn.onclick = ()=> {
      removeTodo(row.getAttribute('id'));
    }
    row.children[3].appendChild(removeBtn);
  };
});
