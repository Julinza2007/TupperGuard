const handleClick = () => {
    document.body.innerHTML = '';

    let container = document.createElement('div');
    container.style = `
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    document.body.append(container);

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
