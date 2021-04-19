// --------> variables <--------
const totalPay = document.getElementById('totalPay');
const addButton = document.getElementById('button-add');
const removeButton = document.getElementById('button-remove');
const fullButton = document.getElementById('full-payment');
const newEmployee = document.getElementById('new-employee');
const user = document.getElementById('user');
const inputDay = document.getElementById('day');
const entryTime = document.getElementById('entryTime');
const departureTime = document.getElementById('departureTime');
const container = document.getElementById('container')

fullButton.disabled = true;
newEmployee.disabled = true;
let dataEntered = 0
let payHour = 0
let addHours = 0
let paymentAcum = []
// --------> variables <--------

// --------> events <--------
addButton.addEventListener('click', (e)=>{
  e.preventDefault()
  const inputDayValue = inputDay.value;
  const entryTimeValue = entryTime.value;
  const departureTimeValue = departureTime.value;
  fullButton.disabled = false;
  addValues(inputDayValue, entryTimeValue, departureTimeValue);
})

removeButton.addEventListener('click', (e) => {
  e.preventDefault()
  paymentAcum.pop()
  const lastNode = container.lastChild
  if(lastNode){
    lastNode.remove()
  } else {
    return
  }
  if(paymentAcum.length === 0) {
    alert('Eliminaste todos los datos')
  }
})

fullButton.addEventListener('click', (e)=>{
  e.preventDefault()
  const userValue = user.value;
  const totalPayment = paymentAcum.reduce((acum, currentValue)=> acum + currentValue)
  console.log(totalPayment)
  totalPay.innerHTML = `El monto a pagar por ${userValue.toUpperCase()} es: $${totalPayment}`
  inputDay.disabled = true;
  entryTime.disabled = true;
  departureTime.disabled = true;
  addButton.disabled = true;
  removeButton.disabled = true;
  fullButton.disabled = true;
  newEmployee.disabled = false;
})

newEmployee.addEventListener('click', () => {
  dataEntered = 0;
  payHour = 0;
  addHours = 0;
  paymentAcum = [];
  user.innerHTML = '';
  inputDay.disabled = false;
  entryTime.disabled = false;
  departureTime.disabled = false;
  addButton.disabled = false;
  removeButton.disabled = false;
  newEmployee.disabled = true;
  const title = document.querySelector('h2');
  title.innerHTML = '';
  inputDay.innerHTML = '';
  const allParagraph = document.querySelectorAll('p');
  for(item of allParagraph){
    item.remove()
  }
})
// --------> events <--------

// --------> functions <--------
const addValues = (day, entry, departure) => {
  const entryNumber = parseInt(entry);
  const departureNumber = parseInt(departure)
  let hoursWorked = Math.abs(departureNumber - entryNumber) 
  switch (day.toLowerCase()) {
    case 'mo':
    case 'tu':
    case 'we':
    case 'th':
    case 'fr':
      valueHoursWeekday(entry, departure)
      break;
    case 'sa':
    case 'su':
      valueHoursWeekend(entry, departure)
      break;
    default:
      alert('Ingresaste mal algún valor')
      dataEntered = 0;
      return
    }

  const dailyPay = hoursWorked * payHour
  console.log(dailyPay)
  paymentAcum.push(dailyPay)
  console.log(paymentAcum)
  console.log(`trabajó ${hoursWorked}`)
  console.log(`La hora cuesta ${payHour}`)
  const showPayment = document.createElement('p')
  showPayment.innerHTML = `Por el día "${day}" se le pagará $${paymentAcum[paymentAcum.length - 1]}`
  container.appendChild(showPayment)
}

const valueHoursWeekday = (entry, departure) => {
  if ((entry >= '00:01' && entry <= '09:00') && (departure >= '00:01' && departure <= '09:00')) {
    payHour = 25
  } else if ((entry >= '09:01' && entry <= '18:00') && (departure >= '09:01' && departure <= '18:00')) {
    payHour = 15
  } else {
    payHour = 20
  }
}

const valueHoursWeekend = (entry, departure) => {
  if ((entry >= '00:01' && entry <= '09:00') && (departure >= '00:01' && departure <= '09:00')) {
    payHour = 30             
  } else if ((entry >= '09:01' && entry <= '18:00') && (departure >= '09:01' && departure <= '18:00')) {
    payHour = 20
  } else {
    payHour = 25
  }
}
// --------> functions <--------