function redirigir() {
    var opcionSeleccionada = document.getElementById("opcion").value;
  
    if (opcionSeleccionada === "actualizar") {
      window.location.href = "Ejemplo1.html";
    } else if (opcionSeleccionada === "verSaldo") {
      window.location.href = "ver_saldo.html";
    }
  }