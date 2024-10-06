// Fetching data (simulated here with an example)
const tableData = [
    { label: "Name", type: "text", name: "name" },
    { label: "Email", type: "email", name: "email" },
    { label: "Age", type: "number", name: "age" },
    { label: "Message", type: "textarea", name: "message" }
];

// Function to create form dynamically
function createTable(data) {
    const tableContainer = document.getElementById("table-container");
    const table = document.createElement("table"); 
    table.setAttribute("border", 1)

    data.forEach(field => {
        const label = document.createElement("label")
        label.textContent = field.label
        })

    data.forEach((rowData, rowIndex) => {
            const row = document.createElement("tr")
        })

       

    
}

// Simulate fetching the data and creating the form
document.addEventListener('DOMContentLoaded', () => {
    // You can replace this with an actual fetch request
    // e.g., fetch('/api/form-data').then(response => response.json()).then(createForm);
    createForm(formData);
});
