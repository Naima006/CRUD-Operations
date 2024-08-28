document.getElementById('crudForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNo = document.getElementById('phoneNo').value;

    addRow(firstName, lastName, phoneNo);

    document.getElementById('crudForm').reset();
});

function addRow(firstName, lastName, phoneNo) {
    const table = document.getElementById('crudTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = phoneNo;
    cell4.innerHTML = `
        <div class="actions">
            <button class="edit-btn" onclick="editRow(this)">Edit</button>
            <button class="delete-btn" onclick="deleteRow(this)">Delete</button>
        </div>
    `;
}

function editRow(btn) {
    const selectedRow = btn.parentElement.parentElement.parentElement;
    document.getElementById('firstName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('lastName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('phoneNo').value = selectedRow.cells[2].innerHTML;

    deleteRow(btn);
}

function deleteRow(btn) {
    const row = btn.parentElement.parentElement.parentElement;
    row.remove();
}
