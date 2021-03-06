function showCity() {
    let nomVilleSelectionnee = document.getElementById("ville-selectionne").value;  
    let cities = document.getElementsByClassName("city");
    for (i = 0; i < cities.length; i++) {
        console.log("cities[i]",cities[i])
        if (cities[i].id !== nomVilleSelectionnee) {
            cities[i].style.display = "none";
        }
        else {
            cities[i].style.display = "";
        }
    }
}