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
  const container= document.querySelector(".container");
  console.log(container);
    for(let i = 0; i<team.length; i++){
      
      container.innerHTML += `
      <div class="card">
        <img src= "assets/img/${team[i].image}">
        
          <div class="item">
            <p>${team[i].name}</p>
            <p>${team[i].role}  </p>
            
          </div>
      </div>`
    
   
    
    }
  
  
  // section add member
  // 1- Prendere il btn dalla dom
  const add = document.querySelector(".btn");
  console.log(add);
  add.addEventListener("click", function(){
    console.log("ok");
    name_member = document.querySelector(".nome").value;
    role_member = document.querySelector(".ruolo").value;
    img_profile = document.querySelector(".img").value;
    console.log(name_member, role_member, img_profile);
  })