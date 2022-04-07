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
  console.log("** Info Wayne Barnett **");
  console.log(team[0].name);
  console.log(team[0].role);
  console.log(team[0].image);

console.log("** info Angela Caroll**");
  //- 2 Angela Caroll
  console.log(team[1].name);
  console.log(team[1].role);
  console.log(team[1].image);


  console.log("** info Walter Gorn");
  //- 3 Walter Gordon
  console.log(team[2].name);
  console.log(team[2].role);
  console.log(team[2].image);

  console.log("** info Angela Lopez");
  // -4 Angela Lopez
  console.log(team[3].name);
  console.log(team[3].role);
  console.log(team[3].image);

  console.log("info ** Scott Estrada");
  console.log(team[4].name);
  console.log(team[4].role);
  console.log(team[4].image);

  console.log("info ** Barbara Ramos");
  console.log(team[5].name);
  console.log(team[5].role);
  console.log(team[5].image);