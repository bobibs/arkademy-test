var pohonJati = function (tinggiPohon, umurPohon){
    var tinggiPohon;
    var musimSemi;
    var musimPanas;
    var musimGugur;
    var musimDingin;
    var umurPohon;
    var total;

    var musimSemi = tinggiPohon + 1;
    var musimPanas = musimSemi * musimSemi * musimSemi;
    var musimGugur = musimPanas - 1.5;
    var musimDingin = musimGugur + (musimGugur * 15 / 100);
    var total = musimDingin * umurPohon;

    return total;
}

console.log(pohonJati(2,2));