import { useState, useEffect } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [nombreValido, setNombreValido] = useState(false);
  const [nombreConfirmado, setNombreConfirmado] = useState(''); // nombre validado

  useEffect(() => {
    if (nombreValido && nombreConfirmado) {
      // solo pedimos saludo si el nombre fue validado y no está vacío
      fetch(`http://localhost:3000/saludo/${nombreConfirmado}`)
        .then(res => res.text())
        .then(texto => setMensaje(texto))
        .catch(() => setMensaje('Error al obtener el saludo'));
    }
  }, [nombreValido, nombreConfirmado]);

  const manejarSaludo = () => {
    const nombreLimpio = nombre.trim().toLowerCase();

    if (!nombreLimpio) {
      setMensaje('Por favor ingresá un nombre.');
      setNombreValido(false);
      return;
    }

    fetch(`http://localhost:3000/validar/${nombreLimpio}`)
      .then(res => res.json())
      .then(data => {
        if (data.valido) {
          setNombreConfirmado(nombreLimpio); // guardamos el nombre válido
          setNombreValido(true); // dispara el useEffect
        } else {
          setNombreValido(false);
          setMensaje('Nombre no válido.');
        }
      })
      .catch(() => {
        setNombreValido(false);
        setMensaje('Error al validar el nombre.');
      });
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Generador de saludos!</h1>
      <input
        type="text"
        placeholder="Ingresá tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={manejarSaludo} style={{ marginLeft: '10px' }}>
        Saludar
      </button>
      <p>{mensaje}</p>
    </div>
  );
}

export default App;
