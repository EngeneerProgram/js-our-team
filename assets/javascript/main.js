/*  ESERCIZIO DA CONSEGNARE ENTRO LE 18

Viene fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
MILESTONE 1 (da fare entro le 18):
stampare su console le informazioni di nome, ruolo e la stringa della foto
*/

const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

  // stampare su console
  // -1 Wayne Barnett
  for(let i = 0; i<team.length; i++){
      console.log("User**");
      console.log(team[i].name);
      console.log(team[i].role);
      console.log(team[i].image);
  }
const img = document.querySelectorAll(".img");
console.log(img);
  for(let i = 0; i<team.length; i++){
    creareCard();
    
    
    
    
  }

function creareCard(){
  //creare il div contente la card
  let card = document.createElement("div");
  console.log(card);
  card.style.width = "250px";
  card.style.height= "300px";
 
}