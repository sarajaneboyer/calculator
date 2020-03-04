//I can't write any code here because as soon as I write my first line I see the error 
// "Cannot read property 'querySelector' of null"
// I haven't been able to get past this first line even by directly copy and pasting from tutorials using CSS Grid or tables in HTML

const calculator=document.querySelector('.calculator')
const keys=calculator.querySelector('.calculator__keys')


keys.addEventListener("click", e => {
  if (e.target.matches('button')){
    //do something here
    const key = e.target
    const action = key.dataset.action
    if (!action) {
      console.log('number key!')
    }
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      console.log('operator key!')
    }
    if (action === 'clear') {
      console.log('clear key!')
    }
    if (action === 'calculate') {
      console.log('calculate key!')
    }
  }
})