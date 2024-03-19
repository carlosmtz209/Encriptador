function encriptarTexto(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
  }
  
  
  function desencriptarTexto(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
  }
  document.querySelector('.boton-encriptar').addEventListener('click', function() {
    const texto = document.querySelector('.text-area').value;
    if(texto === "") {
      alert("Por favor, ingresa el texto a encriptar.");
      return;
    }
    const textoEncriptado = encriptarTexto(texto);
    document.querySelector('.mensaje').value = textoEncriptado;
  });
  
  // Manejador del botón desencriptar
  document.querySelector('.boton-desencriptar').addEventListener('click', function() {
    const texto = document.querySelector('.text-area').value;
    if(texto === "") {
      alert("Por favor, ingresa el texto a desencriptar.");
      return;
    }
    const textoDesencriptado = desencriptarTexto(texto);
    document.querySelector('.mensaje').value = textoDesencriptado;
  });
  
  // Copiar texto al portapapeles
  document.querySelector('.boton-copiar').addEventListener('click', function() {
    const textoParaCopiar = document.querySelector('.mensaje').value;
    if(textoParaCopiar === "") {
      alert("No hay texto para copiar.");
      return;
    }
    navigator.clipboard.writeText(textoParaCopiar).then(() => {
      alert('Texto copiado al portapapeles');
    }).catch(err => {
      console.error('Error al copiar el texto: ', err);
    });
  });