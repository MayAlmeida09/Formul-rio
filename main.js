document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Obtém valores do formulário
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    
    // Adiciona uma nova linha na tabela
    const table = document.getElementById("contactTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    // Cria células e insere valores
    const nameCell = newRow.insertCell(0);
    const phoneCell = newRow.insertCell(1);
    nameCell.textContent = name;
    phoneCell.textContent = phone;
    
    // Limpa os campos do formulário
    document.getElementById("contactForm").reset();
});