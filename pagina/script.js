document.addEventListener("DOMContentLoaded", function() {
    const pedidoForm = document.getElementById("pedidoForm");
    const reclamoForm = document.getElementById("reclamoForm");
    const mensajePedido = document.getElementById("mensajePedido");
    const mensajeReclamo = document.getElementById("mensajeReclamo");

    // Manejo del formulario de pedidos
    pedidoForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario
        const producto = document.getElementById("producto").value;
        const cantidad = document.getElementById("cantidad").value;

        // Aquí podrías agregar lógica para enviar el pedido a un servidor

        // Mostrar mensaje de éxito
        mensajePedido.innerHTML = `<p style="color: green;">Pedido registrado: ${cantidad} unidades de ${producto}.</p>`;
        pedidoForm.reset(); // Reinicia el formulario
    });

    // Manejo del formulario de reclamos
    reclamoForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario
        const reclamo = document.getElementById("reclamo").value;

        // Aquí podrías agregar lógica para enviar el reclamo a un servidor

        // Mostrar mensaje de éxito
        mensajeReclamo.innerHTML = `<p style="color: green;">Reclamo enviado: ${reclamo}</p>`;
        reclamoForm.reset(); // Reinicia el formulario
    });
});