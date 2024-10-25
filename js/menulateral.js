document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os botões
    const sectionButtons = document.querySelectorAll(".section-bnt");

    sectionButtons.forEach(function(button) {
        const form = button.nextElementSibling; 
        const icon = button.querySelector("i"); 

        button.addEventListener("click", function() {
            
            form.classList.toggle("hidden");

            
            if (form.classList.contains("hidden")) {
                icon.classList.replace("bi-chevron-up", "bi-chevron-down");
            } else {
                icon.classList.replace("bi-chevron-down", "bi-chevron-up");
            }
        });
    });
});


function selecionarTodos(grupo) {
    // Seleciona o checkbox "Exibir Todos"
    const checkboxExibirTodos = document.getElementById(`exibir-todos-${grupo}`);
    
    // Seleciona todos os checkboxes do grupo específico
    const checkboxes = document.querySelectorAll(`input[type="checkbox"].${grupo}`);
    
    // Define o estado dos outros checkboxes com base no "Exibir Todos"
    checkboxes.forEach(checkbox => {
        checkbox.checked = checkboxExibirTodos.checked;
    });
}