document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('.login-formulario');
  
  loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      
      const email = document.querySelector('#usuario').value;
      
      if (email === 'oj.flo@copo.mx') {
          window.location.href = 'superusu.html';
      } else if (email === 'xs.med@copo.mx') {
          window.location.href = 'recursos.html';
      } else if (email === 'pe.cas@copo.mx') {
          window.location.href = 'finanzas.html';
      } else {
          alert('Correo no reconocido. Por favor, inténtelo de nuevo.');
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Generar datos aleatorios
  function getRandomNumber(min, max) {
      return (Math.random() * (max - min) + min).toFixed(2);
  }

  const data = [];
  for (let i = 0; i < 20; i++) {
      data.push({
          ingresos: getRandomNumber(1000, 10000),
          ventas: getRandomNumber(500, 7000),
          compras: getRandomNumber(300, 6000),
          salarios: getRandomNumber(200, 5000),
          impuestos: getRandomNumber(100, 2000)
      });
  }

  // Insertar los datos en la tabla
  const tableBody = document.getElementById('data-table-body');
  data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${item.ingresos}</td>
          <td>${item.ventas}</td>
          <td>${item.compras}</td>
          <td>${item.salarios}</td>
          <td>${item.impuestos}</td>
      `;
      tableBody.appendChild(row);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Generar datos aleatorios
  function getRandomName() {
      const names = ['Juan', 'María', 'Pedro', 'Ana', 'Luis', 'Carmen', 'José', 'Laura', 'Miguel', 'Sofía'];
      return names[Math.floor(Math.random() * names.length)];
  }

  function getRandomSurname() {
      const surnames = ['García', 'Martínez', 'López', 'González', 'Pérez', 'Rodríguez', 'Sánchez', 'Ramírez', 'Torres', 'Flores'];
      return surnames[Math.floor(Math.random() * surnames.length)];
  }

  function getRandomDepartment() {
      const departments = ['Recursos Humanos', 'Finanzas', 'IT', 'Marketing', 'Ventas', 'Logística', 'Producción', 'Compras'];
      return departments[Math.floor(Math.random() * departments.length)];
  }

  function getRandomStatus() {
      return Math.random() > 0.5 ? 'Alta' : 'Baja';
  }

  const data = [];
  for (let i = 0; i < 20; i++) {
      data.push({
          id: i + 1,
          nombre: getRandomName(),
          apellido: getRandomSurname(),
          departamento: getRandomDepartment(),
          status: getRandomStatus()
      });
  }

  // Insertar los datos en la tabla
  const tableBody = document.getElementById('data-table-body-recursos');
  data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td data-label="id Empleado">${item.id}</td>
          <td data-label="Nombre">${item.nombre}</td>
          <td data-label="Apellido">${item.apellido}</td>
          <td data-label="Departamento">${item.departamento}</td>
          <td data-label="Alta o Baja">${item.status}</td>
      `;
      tableBody.appendChild(row);
  });
});
