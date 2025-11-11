const handleClick = () => {
    document.body.innerHTML = '';

    let container = document.createElement('div');
    container.style = `
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    document.body.append(container);

    container.id = 'containerChango';

    let p = document.createElement('p');
    p.textContent = 'Próximamente';
    p.style = 'font-size: 3em;';
    container.append(p);

    let btnVolver = document.createElement('button');
    btnVolver.textContent = 'Volver';
    btnVolver.style = 'margin-left: 2rem;';
    btnVolver.onclick = () => location.reload();
    container.append(btnVolver);

    document.body.style.backgroundImage = 'none';
};

function mostrarTuppy() {
  let capa = document.getElementById('comparacion');
  if (!capa) {
    // Overlay
    let overlay = document.createElement('div');
    overlay.id = 'comparacion';

    // Panel
    let panel = document.createElement('div');
    panel.className = 'comparacion-panel';

    // Header con botón cerrar
    let header = document.createElement('div');
    header.className = 'comparacion-header';

    let titulo = document.createElement('strong');
    titulo.textContent = 'Estado del alimento';

    let btnCerrar = document.createElement('button');
    btnCerrar.id = 'comparacion-cerrar';
    btnCerrar.textContent = 'Cerrar';

    header.append(titulo, btnCerrar);

    // Grid con 2 tarjetas
    let grid = document.createElement('div');
    grid.className = 'comparacion-grid';

    // --- Tarjeta: BUENA ---
    let itemBuena = document.createElement('div');
    itemBuena.className = 'comparacion-item';

    let imgBuena = document.createElement('img');
    imgBuena.src = './img/hamburguesa.png';   // buen estado
    imgBuena.alt = 'Comida en buen estado';

    let labelBuena = document.createElement('p');
    let ledVerde = document.createElement('span');
    ledVerde.className = 'led led-verde';
    labelBuena.append(ledVerde, 'BUENA');

    itemBuena.append(imgBuena, labelBuena);

    // --- Tarjeta: VENCIDA ---
    let itemVencida = document.createElement('div');
    itemVencida.className = 'comparacion-item';

    let imgVencida = document.createElement('img');
    imgVencida.src = './img/malEstado.png';   // mal estado
    imgVencida.alt = 'Comida en mal estado';

    let labelVencida = document.createElement('p');
    let ledRoja = document.createElement('span');
    ledRoja.className = 'led led-roja';
    labelVencida.append(ledRoja, 'VENCIDA');

    itemVencida.append(imgVencida, labelVencida);

    // Armar todo
    grid.append(itemBuena, itemVencida);
    panel.append(header, grid);
    overlay.append(panel);
    document.body.append(overlay);

    // Cerrar SOLO con el botón
    btnCerrar.addEventListener('click', () => {
      overlay.style.display = 'none';
    });

    // Mostrar
    overlay.style.display = 'flex';
  } else {
    // Si ya existe, solo mostrar
    capa.style.display = 'flex';
  }
}


