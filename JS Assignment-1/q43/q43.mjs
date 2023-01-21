//unchanged magicians

let magicians = ["Eirc", "Tom", "Jack", "Adam", "Johny"];

function showMagicians() {
    console.log(magicians);   
}

function makeGreat() {
    for (let i = 0; i < magicians.length; i++){
    magicians [i] = "the Great " + magicians[i];
    }
    return magicians;
}

showMagicians();

let greatMagicians = makeGreat();
console.log(greatMagicians);
