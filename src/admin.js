const viewVisit = () => {
  console.log('hola visitantes')
  const contentTable = document.getElementById('contentTable');
  let reference = firebase.database().ref('/registro');
  reference.once('value', (data) => {
    data.forEach(registro => {
      let visitor = registro.key,
      registroDatos = registro.val();
      contentTable.innerHTML = `
          <tr data-key="${visitor}">
            <td>${registroDatos.name}</td>
            <td>${registroDatos.apellido}</td>
            <td>${registroDatos.empresa}</td>
            <td>${registroDatos.time}</td>
          </tr>
          `
    })
  });
}
viewVisit();