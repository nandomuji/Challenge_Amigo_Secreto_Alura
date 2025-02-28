// Solución del challenge amigo secreto

const amigos = [];
const inputNombreAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const botonReinicio = document.getElementById('reinicioBtn');

// Función para agregar amigos
const agregarAmigo = () => {
  let nombreAmigo = inputNombreAmigo.value.trim();
  if (nombreAmigo) {
    if (amigos.includes(nombreAmigo)) {
      inputNombreAmigo.value = '';
      alert(`Ya existe un amigo llamado ${nombreAmigo}`);
      return;
    }
    amigos.push(nombreAmigo);
    inputNombreAmigo.value = '';
    actualizarListaAmigos();
    return;
  }
  alert('Por favor, inserte un nombre');
}

// Función para actualizar la lista de amigos
const actualizarListaAmigos = () => {
  listaAmigos.innerHTML = '';
  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });

  if (resultado.textContent) {
    resultado.textContent = '';
  }
}

// Función para sortear amigos

const sortearAmigo = () => {
  if (amigos.length < 2) {
    resultado.innerHTML = 'Debe ingresar al menos 2 amigos para sortear.';
    return;
  }

  const indiceAmigoElegido = Math.floor(Math.random() * amigos.length);
  const amigoElegido = amigos.splice(indiceAmigoElegido, 1)[0];
  actualizarListaAmigos();
 // resultado.innerHTML = `El amigo elegido es <strong>${amigoElegido}</strong>`;
  resultado.innerHTML = `El amigo elegido es <strong class="amigo-sorteado">${amigoElegido}</strong>`;
  // Habilitar botón de reinicio
  botonReinicio.disabled = false;
}

// Función para limpiar todo
const clearControl = () => {
  amigos.length = 0;  // Vaciar el array
  listaAmigos.innerHTML = '';
  resultado.innerHTML = '';
  inputNombreAmigo.value = '';
  
  // Deshabilitar botón de reinicio nuevamente
  botonReinicio.disabled = true;
}