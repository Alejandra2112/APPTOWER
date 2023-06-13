const url = 'http://localhost:8094/api/usuario'
const listarUsuarios = async() => {
    let body = document.getElementById('contenido')
    if(body){
        let mensaje = ''
        
        fetch(url)//Permite llamar la API
        .then(res => res.json())
        .then(function (data) {
            let listarUsuarios = data.usuarios
            listarUsuarios.map((usuario) => {
                mensaje += `<tr><td>${usuario.tipoDoc}</td>` +
                `<td>${usuario.documento}</td>` +
                `<td>${usuario.nombre}</td>` +
                `<td>${usuario.apellido}</td>` +
                `<td>${usuario.correo}</td>` +
                `<td>${usuario.telefono}</td>` +
                `<td>${usuario.rol}</td>` +
                `<td><a class="waves-effect waves-light btn modal-trigger" href="#modal1" onclick='editar(${JSON.stringify(usuario)})'>Editar</a>
                 <a class="waves-effect waves-light btn modal-trigger red" href="#" onclick='eliminar("${usuario._id}")'>Eliminar</a>
                </td></tr>`;
                body.innerHTML = mensaje
            }   
            )
        })
    }
}

listarUsuarios()