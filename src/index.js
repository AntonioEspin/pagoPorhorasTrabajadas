const parrafo = document.getElementById('parrafo');
const totalPay = document.getElementById('totalPay')
const addButton = document.getElementById('button-add');
const fullButton = document.getElementById('full-payment')
const newEmployee = document.getElementById('new-employee')
const inputDay = document.getElementById('day');
const entryTime = document.getElementById('entryTime');
const departureTime = document.getElementById('departureTime');

let datosIngresados = 0
let payHour = 0
let sumaHoras = 0
let pagoAcum = []

addButton.addEventListener('click', (e)=>{
  e.preventDefault()
  const inputDayValue = inputDay.value;
  const entryTimeValue = entryTime.value;
  const departureTimeValue = departureTime.value;

  if (inputDayValue === ""){
    alert('No ingresaste el dia')
    return
  } else {
    datosIngresados += 1
    if (datosIngresados === 1){
      parrafo.innerHTML = `Ingresaste ${datosIngresados} dato`
    } else if (datosIngresados > 1) {
      parrafo.innerHTML = `Ingresaste ${datosIngresados} datos`
    } else {
      parrafo.innerHTML = `No hay datos ingresados`
    }
  }
  addValues(inputDayValue, entryTimeValue, departureTimeValue)
})

fullButton.addEventListener('click', (e)=>{
  e.preventDefault()
  const totalPayment = pagoAcum.reduce((acum, currentValue)=> acum + currentValue)
  console.log(totalPayment)
  totalPay.innerHTML = `El total a pagar es de ${totalPayment}`
})

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
      alert('Ingresaste mal algun valor')
      datosIngresados = 0;
      return
    }

  const pagoDiario = hoursWorked * payHour
  console.log(pagoDiario)
  pagoAcum.push(pagoDiario)
  console.log(pagoAcum)
  console.log(`el pana trabajo ${hoursWorked}`)
  console.log(`La hora cuesta ${payHour}`)
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
