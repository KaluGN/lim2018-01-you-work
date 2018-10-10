const visitRegister = document.getElementById('btn_registrarVisita');

visitRegister.addEventListener('click', () => {
    
    event.preventDefault();
    console.log('holaaa');
    const nameValidate = document.getElementById('validarNombre').value;
    const lastNamevalidate = document.getElementById('validarApellido').value;
    const enterCompany = document.getElementById('ingresarEmpresa').value;
    const timeVisit = new Date().toLocaleString();

    const dataSave = firebase.database().ref().child('registro');
    dataSave.push({
        name: nameValidate,
        apellido: lastNamevalidate,
        empresa: enterCompany,
        time: timeVisit 
    })
})


