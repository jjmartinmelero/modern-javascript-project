const students = [
    { id: 1, name: 'Ana García', scores: [85, 92, 78, 90] },
    { id: 2, name: 'Carlos López', scores: [75, 82, 79, 88] },
    { id: 3, name: 'Elena Martínez', scores: [95, 91, 93, 92] },
    { id: 4, name: 'David Sánchez', scores: [65, 71, 68, 72] },
    { id: 5, name: 'Sofía Rodríguez', scores: [88, 84, 89, 86] },
]


const newStudents = students.values().map((student) => {
    console.log(`mapped ${student.name}`);

    return { ...student, scores: student.scores.map(n => n / 10) }
})

console.log(newStudents);

// lazy evaluation
console.log(newStudents.next());

for (const student of newStudents) {
    console.log(student);

    if (student.id === 2) {
        break;
    }
}


// with entries
const entries = students.entries();
const keys = students.keys();
console.log(entries.next());
console.log(keys.next());
