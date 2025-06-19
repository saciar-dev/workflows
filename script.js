fetch('/agenda.json')
  .then(response => {
    if (!response.ok) throw new Error("No se pudo cargar la agenda");
    return response.json();
  })
  .then(data => {
    const tbody = document.querySelector("#agenda tbody");
    data.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.hora}</td>
        <td>${item.actividad}</td>
        <td>${item.responsable}</td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(error => {
    document.querySelector("#agenda tbody").innerHTML = 
      `<tr><td colspan="3">Error al cargar la agenda</td></tr>`;
    console.error(error);
  });

  const titulo = document.getElementById('fecha-titulo');
    const menu = document.getElementById('fecha-menu');
    titulo.addEventListener('click', () => {
      menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    });
    // Opcional: cerrar el menú si se hace clic fuera
    document.addEventListener('click', (e) => {
      if (!titulo.contains(e.target) && !menu.contains(e.target)) {
        menu.style.display = 'none';
      }
    });