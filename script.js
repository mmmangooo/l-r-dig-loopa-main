//1. Skapa en konstant variabel och sätt värdet till elementet
//   med id't "plantCards" för att kunna fylla HTML-elementet
//   med fler plantor

const plantElement = document.getElementById("plantCards");

//2. Här är en array med alla plant-objekt.
//   Lägg gärna till fler plantor om du vill!
const plants = [
  {
    name: "Monstera",
    latinName: "Monstera deliciosa",
    light: "sunny",
    water: "when dry",
    imageURL: "./assets/monstera.jpg",
  },
  {
    name: "Moses stentavlor",
    latinName: "Maranta leuconeura",
    light: "light shadow",
    water: "regularily",
    imageURL: "./assets/maranta.jpg",
  },
  {
    name: "Coleus",
    latinName: "Solenostemon scutellarioides",
    light: "sunny",
    water: "often",
    imageURL: "./assets/coleus.jpg",
  },
  {
    name: "Ficus",
    latinName: "Ficus lyrata",
    light: "half sunny",
    water: "when dry",
    imageURL: "./assets/ficus.jpg",
  },
  {
    name: "Pilea",
    latinName: "Pilea peperomioides",
    light: "half sunny",
    water: "when dry",
    imageURL: "./assets/pilea.jpg",
  },
];

//Din uppgift är att använda arrayen ovan för att fylla HTML-elementet
//med id't "plantCards" med flera plantor.

//3. Börja med att loopa över arrayen och för varje planta loggar du
//   t.ex. plantans namn i consollen.

//4. Fick du alla namnen utskrivna i consollen? Härligt! Nu kan vi börja
//   modifiera DOM-en. Använd varaibeln som du skapade i början av denna
//   fil och ändra dess HTML så att varje planta får ett eget kort.

//Hint! För att inte skriva över varje kort med det nya kortet kan du
//skriva += för att lägga till saker till den HTML som redan finns.

//Hint 2! För att få samma styling på dessa kort som på korten som redan
//finns - se efter vilka klassnamn elementen i HTML-filen är tilldelade.

//PS. Ändra gärna stylingen för att göra det mer personligt!


// Array method for looping over the elements in an array and calling a function for each iteration

plants.forEach(fillCard);

// The function being called for each iteration

function fillCard(plant) {
  // Variables holding created elements that are going to be filled with information
  let div = document.createElement("div");
  let h2 = document.createElement("H2");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let img = document.createElement("img");

  // Setting css classes to the created elements, for styling

  div.className = "plant-card";
  h2.className = "plant-title";
  p1.className = "grey-text";
  p2.className = "info-text";
  p3.className = "info-text";
  img.className = "plant-image";

  // Filling the created elements with information from the array, and creating a new element for each iteration 

  h2.innerHTML += plant.name;
  p1.innerHTML += plant.latinName;
  p2.innerHTML += plant.light;
  p3.innerHTML += plant.water;
  img.setAttribute("src", plant.imageURL);

  // Appending the information filled elements to the div 

  div.appendChild(h2);
  div.appendChild(p1);
  div.appendChild(img);
  div.appendChild(p2);
  div.appendChild(p3);

  // Appending the div to the main element in the html
  plantElement.appendChild(div);
}


