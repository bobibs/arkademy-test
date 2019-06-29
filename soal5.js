var inputAsal = [9,0,9,5,2,4,0,1];
var hapusAngka = [0];

filteredArray = inputAsal.filter( function (el) {
    return !hapusAngka.includes(el);
});

document.write(filteredArray.sort());