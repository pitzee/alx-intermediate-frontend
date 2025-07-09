interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "drake",
  lastName: "Johnson",
  age: 22,
  location: "Addis Ababa",
};

const student2: Student = {
  firstName: "snoop",
  lastName: "Zeleke",
  age: 31,
  location: "Jimma",
};

const studentsList: Student[] = [student1, student2];

// Create table
const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
