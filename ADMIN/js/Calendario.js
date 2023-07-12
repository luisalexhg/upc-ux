// Obtener referencias a los elementos del calendario
const monthYearElement = document.getElementById('month-year');
const daysContainer = document.getElementById('calendar-days');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');

// Obtener la fecha actual
const currentDate = new Date();

// Variables para el mes y el año actual
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Definir los nombres de los meses
const monthNames = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
];

// Actualizar el calendario
function updateCalendar() {
  // Limpiar los días anteriores
  daysContainer.innerHTML = '';

  // Mostrar el mes y el año actual en el calendario
  monthYearElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;

  // Obtener el primer día de la semana del mes actual
const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Obtener el número de días en el mes actual
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Generar los elementos HTML para los días del mes
for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyDayElement = document.createElement('button');
    emptyDayElement.classList.add('empty');
    daysContainer.appendChild(emptyDayElement);
  }
  
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement('button');
    dayElement.textContent = day;
    daysContainer.appendChild(dayElement);
  
    // Agregar evento de clic a cada botón de día
dayElement.addEventListener('click', function() {
  // Remover la clase 'selected' de todos los días
  const selectedDays = document.querySelectorAll('.days button.selected');
  selectedDays.forEach((selectedDay) => {
    selectedDay.classList.remove('selected');
  });

  // Agregar la clase 'selected' al día seleccionado
  dayElement.classList.add('selected');
});

  }
}

// Cambiar al mes anterior
prevMonthButton.addEventListener('click', function() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  updateCalendar();
});

// Cambiar al mes siguiente
nextMonthButton.addEventListener('click', function() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  updateCalendar();
});

// Inicializar el calendario
updateCalendar();

function toggleButton(button) {
  const buttons = document.getElementsByClassName('month-button');
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }
  
  button.classList.add('active');
}