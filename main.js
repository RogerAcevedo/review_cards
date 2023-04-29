// LOCAL DATA
const reviews = [
    {
      id: 1,
      name: 'Name: BlackBeard',
      job: 'Captain of the Black Beard Pirates',
      img: 'blackbeard.png',
      text: "Dreams Never Die - Blackbeard, also known as Marshall D. Teach, is the captain of the Blackbeard Pirates, a cunning and ruthless pirate with the power of two devil fruits.      ",
    },
    {
      id: 2,
      name: 'Name: Shiryu',
      job: 'Second Ship Captain',
      img: 'Shiryu.png',
      text: 'Shiryu of the rain - Shiryu is a former prison guard and current member of the Blackbeard Pirates, known for his ruthless fighting style and deadly use of a cursed katana.',
    },
    {
      id: 3,
      name: 'Name: Burgess',
      job: 'Helsman',
      img: 'burgess.png',
      text: 'Champion Jesus Burgess - Burgess, the helmsman of the Blackbeard Pirates, is a formidable fighter with a muscular build and a love for wrestling. He has a ruthless streak and was willing to kill for the sake of his crews goals during the Dressrosa arc.',
    },
    {
      id: 4,
      name: 'Name: Pizarro',
      job: 'Fourth Ship Captain',
      img: 'pizarro.png',
      text: 'Corrupt King - As a member of the Blackbeard Pirates, Pizarro is known for his love of violence and destruction. He wields two sabers with deadly precision and has a reputation for being merciless in battle. Hes also shown to be cunning and strategic when necessary.',
    },
    {
      id: 5,
      name: 'Name: Van Augur',
      job: 'Sniper',
      img: 'van.png',
      text: 'Super Sonic - As the sniper of the Blackbeard Pirates, Van Augur is a highly skilled marksman with an incredible range. Hes also shown to be intelligent and strategic, often analyzing his opponents before attacking. ',
    },
    {
      id: 6,
      name: 'Name: Catarina Devon',
      job: 'Sixth Ship Captain',
      img: 'catarina.png',
      text: 'Maiden Hunter - As a member of the Blackbeard Pirates, Catarina Devon possesses a unique Devil Fruit power that allows her to transform into anyone whose face shes touched. Shes a skilled fighter and a master of deception, often using her shapeshifting abilities to trick her opponents.',
    },
    {
      id: 7,
      name: 'Name: Laffitte',
      job: 'Navigator',
      img: 'laffitte.png',
      text: 'Demonic Sheriff - Laffitte serves as the crews navigator and is known for his ability to fly. Hes also a skilled fighter and has been shown to use a cane sword in battle.',
    },
    {
      id: 8,
      name: 'Name: Vasco Shot',
      job: 'Eigth Ship Captain',
      img: 'vascoshot.png',
      text: 'Heavy Drinker - Vasco Shot is known for his incredible physical strength and his love of drinking. Hes a brawler in combat and often uses his fists to pummel his opponents.',
    },
    {
      id: 9,
      name: 'Name: Doc Q',
      job: 'Ninth Ship Captain',
      img: 'docq.png',
      text: 'Grim Reaper - Doc Q is a member of the Blackbeard Pirates and a sickly man who uses his knowledge of poisons to gain an advantage in battle. Hes a master of manipulation and often uses his appearance to deceive his opponents.',
    },
    {
      id: 10,
      name: 'Name: Aokijo',
      job: 'Xmiral',
      img: 'aokiji.png',
      text: 'KUZAN - As a member of the Blackbeard Pirates, Aokiji is a former Admiral of the Navy with the ability to control ice. Hes shown to have a laid-back personality and is often seen lounging around the crews ship.',
    },
  ];


// * SELECT ITEMS
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// *STARTING CARD
let currentCard = 1;

// * DISPLAY ONE CARD
function showPerson(person) {
    const card = reviews[person];
    img.src = card.img;
    author.textContent = card.name;
    job.textContent = card.job;
    info.textContent = card.text;
}

// * LOAD INITIAL CARD
window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentCard)
});


// * BUTTONS
// next
nextBtn.addEventListener('click', function(){
    currentCard++;
    if (currentCard > reviews.length - 1) {
        currentCard = 0
    }
    showPerson(currentCard);
});

//previous
prevBtn.addEventListener('click', function(){
    currentCard--;
    if (currentCard < 0) {
        currentCard = reviews.length - 1
    }
    showPerson(currentCard);
})

//random
randomBtn.addEventListener('click', function(){
    currentCard = Math.floor(Math.random() * reviews.length)
    console.log(currentCard);
    showPerson(currentCard);
})

