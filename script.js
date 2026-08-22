function EmployeeList() {
    let inputbyName = document.getElementById("name").value;
    let inputbyAge = document.getElementById("age").value;
    let inputbyDept = document.getElementById("department").value;
    let inputbyEmail = document.getElementById("email").value;
    let table = document.querySelector("table tbody");
    let row = table.insertRow();
    row.insertCell(0).innerText = inputbyName;
    row.insertCell(1).innerText = inputbyAge;
    row.insertCell(2).innerText = inputbyEmail;
    row.insertCell(3).innerText = inputbyDept;
    row.insertCell(4).innerHTML = `<button onclick="delbtn(this)">Delete</button>`;
    document.getElementById("employeeForm").reset();
}
function delbtn(btn) {
    btn.parentNode.parentNode.remove();
}

document.getElementById("searchInput").addEventListener("keyup", function () {
    searchValue = this.value.toLowerCase();
    let searchRows = document.querySelectorAll("table tbody tr");
    searchRows.forEach(row => {
        const name = row.cells[0].innerText.toLowerCase();
        const age = row.cells[1].innerText.toLowerCase();
        const email = row.cells[2].innerText.toLowerCase();
        const dept = row.cells[3].innerText.toLowerCase();
        if (name.includes(searchValue) || age.includes(searchValue) || email.includes(searchValue) || dept.includes(searchValue)) {
            row.style.display = "";
        }
        else {
            row.style.display = "none";
        }
    });
})