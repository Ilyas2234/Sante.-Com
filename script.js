document.getElementById("santetForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const namaPenerima = document.getElementById("namaPenerima").value;
    const jenisSantet = document.getElementById("jenisSantet").value;

    alert(`Hanya lucu-lucuan! Anda telah mengirim ${jenisSantet} kepada ${namaPenerima}!`);
});
