$(document).ready(function() {

//Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.

var student = {
    'name': 'Enrico',
    'lastName': 'Letta',
    'age': 54 
};

// Stampare a schermo attraverso il for in tutte le proprietà.

for (var key in student) {
    console.log(key + ': ' + student[key]);
}

//Creare un array di oggetti di studenti.

var students = [
    student,
    {
        'name': 'Matteo',
        'lastName': 'Renzi',
        'age': 46 
    },
    {
        'name': 'Nicola',
        'lastName': 'Zingaretti',
        'age': 55 
    }
];

//Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

for (var i = 0; i < students.length; i++) {
    console.log(students[i].name + ' ' + students[i].lastName);
}

//Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var userStudent = {
    'name': prompt('inserire nome nuovo studente'),
    'lastName': prompt('inserire cognome nuovo studente'),
    'age': prompt('inserire età nuovo studente') 
};

students.push(userStudent);

console.log(students);

});