// theory

// const array = [1, 2, 3, 5, 20, 42, 111]
// const arrayStrings = ['a', 'b', 'c', null, 12]
// const array = new Array(1, 2, 3, 5, 20, 42)
// length - довжиина масиву

// console.log(array[0])
// console.log(array[3])
// console.log(array[5])
// console.log(array[10]) undefind бо э тыльки 6 елементыв в мене

/*console.log(array[0])
console.log(array[array.length - 1]) 
array[0] = "privet"
// console.log(array)
array[array.length] = 'becon' // добавити елемент в масив
console.log(array)*/

// console.log(inputElement.value)
// listElement.innerHTML = inputElement.value --- шлях куди звертаюсь

// масив
/*const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')
const notes = ['зробити дз', 'бути на конгресі'] 
  

function render() { 
listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[0]))   
}
 
render()
 
createBtn.onclick = function () {
    if (inputElement.value.length === 0){
      return  }
  
    listElement.insertAdjacentHTML(
        'beforeend',
        getNoteTemplate(inputElement.value) 
    )
      inputElement.value = ''
} 
function getNoteTemplate(title) {
    return 
     `   
       <li
       class="list-group-item d-flex justify-content-between align-items-center">
       <span>${title}</span>
            <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
            </span>
            </li>
       ` 
}
console.log(inputElement.value)*/

const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');
const notes = ['зробити дз', 'бути на конгресі'];

function initialRender() {
  notes.forEach(note => renderRow(note));
}

function renderRow(title) {
  listElement.insertAdjacentHTML(
    'beforeend',
    `
      <li
        class="list-group-item d-flex justify-content-between align-items-center">
        <span>${title}</span>
        <span>
          <span class="btn btn-small btn-success">&check;</span>
          <span class="btn btn-small btn-danger">&times;</span>
        </span>
      </li>
    `,
  );
}

initialRender();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) return;

  renderRow(inputElement.value);
  inputElement.value = '';
};
// console.log(inputElement.value)*/
