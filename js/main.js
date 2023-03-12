

//eventos
//let element = document.querySelector("#my-button")
//element.addEventListener("click", (() => alert("Hello koders!")))



//aqui se crea el evento para pasar la info a un objeto
let fields = document.querySelectorAll("#person-form input")
let personObject = {};
fields.forEach(field => {
  field.addEventListener("keyup", (event) => {
    let property = event.target.name;
    let value = event.target.value;
    personObject[property] = value;
    console.log(personObject)
  })
})

const tableBody = document.getElementById("people-list")


//aqui se crea el evento del boton
let element = document.querySelector("#my-button")
element.addEventListener("click", event => {
  //crear una nueva row
  let tableRow = document.createElement("tr")
  //injectar la fila a la tabla
  tableBody.appendChild(tableRow)
  //for para ejecutar la funcion por cada propiedad del objeto
  for (let prop in personObject) {
    injectTextNodeToTableRow(tableRow, personObject[prop])
  }
  //crear boton en la celda 3
  let newDeleteCell = tableRow.insertCell(3);
  let deleteButton = document.createElement("button")
  const classAdd = deleteButton.classList;
  classAdd.add("btn","btn-outline-info","btn-sm");
  deleteButton.textContent = "x";
  newDeleteCell.appendChild(deleteButton)
  //evento para eliminar tablerow
  deleteButton.addEventListener("click", deleteEvent => { deleteEvent.target.parentNode.parentNode.remove() })

  //al final de todo resetea el form
  event.target.parentNode.parentNode.reset()
})

// let inputForm= document.querySelector("#my-button-2")
// inputForm.addEventListener("click", (event) => {
//   event.target.parentNode.parentNode.reset()
// })


//funcion para injectar el texto a la fila
function injectTextNodeToTableRow(tableRow, text) {
  let cell = document.createElement("td")
  let textNode = document.createTextNode(`${text}`)
  cell.appendChild(textNode)
  tableRow.appendChild(cell)


}




//listItem.classList.add("list-group-item") 
//tr fila td columna

/*
const createTable = (array) => {
  let peopleList = document.getElementById("people-list")
  peopleList.innerHTML = ""
  array.forEach(item => {
    let { name, nat, id, registered } = item

    let trObject = document.createElement("tr")


    let namesElement = document.createElement("td")
    let natsElement = document.createElement("td")
    let agesElement = document.createElement("td")
    let idElement = document.createElement("td")

    let names = document.createTextNode(`${name.title}${name.first}${name.last}`)
    let nats = document.createTextNode(`${nat}`)
    let ages = document.createTextNode(`${registered?.age}`)
    let ids = document.createTextNode(`${id.value}`)

    namesElement.appendChild(names)
    natsElement.appendChild(nats)
    agesElement.appendChild(ages)
    idElement.appendChild(ids)

    trObject.appendChild(idElement)
    trObject.appendChild(namesElement)
    trObject.appendChild(agesElement)
    trObject.appendChild(natsElement)

    peopleList.appendChild(trObject)



  })

}

createTable(personObject)  */

