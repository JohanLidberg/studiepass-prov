
// 1. Varför loggas ingenting ut när man kör det här skriptet? 
// Det finns två fel. SVAR: __först hara hen inga citatatecken på det du vill skriva ut.Sen har functionern ingen namn,det ska ståå console.log(namne("hello Hello, how are you today?")____

// 2. Ändra scriptet så att "Hello, how are you today?" verkligen loggas ut.

function hello() {
    console.log("Hello, how are you today?")
}

//så hör skulle jag skriva 
function hello(str) {
    return str
}
console.log(hello("Hello, how are you today?"))

// 3. Uppdatera funktionen hello så att den tar ett namn som argument
// Gör så att den hälsar med namn, t.ex. "Hello Fredrik, how are you today?"

