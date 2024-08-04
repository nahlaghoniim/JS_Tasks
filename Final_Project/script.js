let students = [
    { name: 'Osama', age: 35, job: "Engineer" },
    { name: 'Fady', age: 18, job: "Student" },
    { name: 'Meto', age: 21, job: "Student" },
];

table(students);

function table(data) {
    document.getElementById('tbl').innerHTML = "";
    data.forEach((element, index) => {
        document.getElementById('tbl').innerHTML += `
        <tr data-index="${index + 1}">
            <td>${index + 1}</td>
            <td>${element.name}</td>
            <td>${element.age}</td>
            <td>${element.job}</td>
            <td><button class="update-btn" onclick="edit(${index + 1})">Edit</button></td>
            <td><button class="update-btn" onclick="del(${index + 1})">Delete</button></td>
        </tr>
        `;
    });
}

function add() {
    let name = document.getElementById('name').value;
    let age = parseInt(document.getElementById('age').value, 10);
    let job = document.getElementById('job').value;

    if (name && !isNaN(age) && age > 0 && job) {
        let student = { name: name, age: age, job: job };
        students.push(student);
        table(students);
        clearFields();
    } else {
        alert('Please enter valid values for all fields.');
    }
}

function del(id) {
    if (confirm('Are you sure you want to delete this student?')) {
        students.splice(id - 1, 1); // Remove the student at the index
        table(students);
    }
}

function edit(id) {
    // Clear previous editing state
    document.querySelectorAll('tr').forEach(row => row.classList.remove('editing'));

    let index = id - 1;
    document.getElementById('name').value = students[index].name;
    document.getElementById('age').value = students[index].age;
    document.getElementById('job').value = students[index].job;
    document.querySelector(`tr[data-index="${id}"]`).classList.add('editing'); // Highlight row

    document.getElementById('btns').innerHTML = `<button class="update-btn" onclick="update(${id})">Update</button>`;
}

function update(id) {
    let index = id - 1;
    let name = document.getElementById('name').value;
    let age = parseInt(document.getElementById('age').value, 10);
    let job = document.getElementById('job').value;

    if (name && !isNaN(age) && age > 0 && job) {
        let student = { name: name, age: age, job: job };
        students[index] = student;
        table(students);
        clearFields();
        document.getElementById('btns').innerHTML = `<button class="add-btn" onclick="add()">Add</button>`;
    } else {
        alert('Please enter valid values for all fields.');
    }
}

function clearFields() {
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('job').value = '';
}
