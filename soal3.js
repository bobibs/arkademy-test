var s = "";
for ( i = 6; i >= 1; i--) // Kolom
    {
        for ( j = 21; j >= 1; j--) // Bintang
        {
            if (i === 6 && j % 2 == 1) {
                s += "*";
            } else if (i === 5 && (j == 3 || j == 19)) {
                s += "*";
            } else if (i === 4 && (j == 5 || j == 17)) {
                s += "*";
            } else if (i === 3 && (j == 7 || j == 15)) {
                s += "*";
            } else if (i === 2 && (j == 9 || j == 13)) {
                s += "*"
            } else if (i === 1 && j == 11) {
                s += "*"
            } else {
                s += " ";
            }
        }
        
        s += "\n";
        
    }

console.log(s);