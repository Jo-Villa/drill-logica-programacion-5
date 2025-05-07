function adivinarNumeroSecreto() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1; // Número aleatorio del 1 al 100
    let intento;
    const intentos = [];
  
    while (true) {
      console.log(numeroSecreto);
      let entrada = prompt("Adivina el número secreto (entre 1 y 100):");
  
      // Validar si el valor es un número
      if (entrada === "") {
        console.log("Dato inválido");
        break;
      }
  
      entrada = entrada.trim();
      intento = Number(entrada);
  
      if (isNaN(intento) || intento < 1 || intento > 100) {
        console.log("Error: Por favor, ingresa un número válido entre 1 y 100.");
        continue;
      }
  
      intentos.push(intento);
  
      if (intento === numeroSecreto) {
        console.log("🎉 ¡Felicidades, adivinaste el número secreto!");
        break;
      } else {
        console.log("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
      }
    }
  }
  
  adivinarNumeroSecreto();