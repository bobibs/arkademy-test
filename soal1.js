var biodata = {
    name : "Bobi Basari",
    age : 24,
    address : {
        street : "Pekayon 1 no.5",
        city : "Jakarta Selatan"
    },
    hobbies : ["Playing PC games", "Playing Mobile games",],
    is_married : "No",
    list_school : [
    {
        name : "SD Kemala Bhayangkari 3",
        year_in : 2001,
        year_out : 2007
    },
    {
        name : "SMPN 41 Jakarta",
        year_in : 2007,
        year_out : 2010
    },
    {
        name : "SMAN 49 Jakarta",
        year_in : 2010,
        year_out : 2013
    },
    {
        major : null
    }
    ],
        skill : [
    {
        skill_name : "Adobe Photoshop",
        level : "Beginner"
    },
    {
        skill_name : "Adobe Indesign",
        level : "Beginner"
    },
    {
        skill_name : "3ds Max",
        level : "Beginner"
    }
    ],
    interest_in_coding : "YES"
}

biodata = JSON.stringify(biodata);
        
console.log(biodata);