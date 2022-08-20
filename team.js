const roster = document.getElementById("teamRoster");

/*Fetch function for JSON data*/
// async function fetchDataJSON() {
//     const response = await fetch('/data/data.json');
//     const player = await response.json();  return player;
//   };

// fetched data
// fetchDataJSON().then(player => {
//     player;

const player = [
  {
    firstName: "Jordan",
    lastName: "Prater",
    position: "Forward",
    height: "6-3",
    jerseyNumber: "23",
    location: "Mukilteo, WA",
    birthDate: "September 16, 2004",
    photo: "assets/jordan_34hi-res.png",
    profileHtml: "jordan-prater",
  },
  {
    firstName: "Number",
    lastName: "22",
    position: "Guard/Forward",
    height: "6-8",
    jerseyNumber: "22",
    location: "Akron, OH",
    birthDate: "December 30, 1984",
    photo: "assets/lucas_34lo-res.png",
  },
  {
    firstName: "Kaden",
    lastName: "Prater",
    position: "Guard",
    height: "6-1",
    jerseyNumber: "21",
    location: "Mukilteo, WA",
    birthDate: "January 29, 2006",
    photo: "assets/kaden_34hi-res2.png",
    profileHtml: "kaden-prater",
  },
  {
    firstName: "Number",
    lastName: "2",
    position: "Guard",
    height: "6-4",
    jerseyNumber: "2",
    location: "Chicago, IL",
    birthDate: "January 17, 1982",
    photo: "assets/number2_34lo-res.png",
  },
  {
    firstName: "Number",
    lastName: "5",
    position: "Guard",
    height: "6-3",
    jerseyNumber: "5",
    location: "Akron, OH",
    birthDate: "March 14, 1988",
    photo: "assets/number5_34lo-res.png",
  },
  {
    firstName: "Number",
    lastName: "24",
    position: "Guard/Forward",
    height: "6-8",
    jerseyNumber: "24",
    location: "Akron, OH",
    birthDate: "Decembeer 30, 1984",
    photo: "assets/number24_34lo-res.png",
  },
  //     {
  //         firstName: "Kobe",
  //         lastName: "Bryant",
  //         position: "Guard",
  //         height: "6-6",
  //         jerseyNumber: "24",
  //         location: "Philadelphia, PA",
  //         birthDate: "August 23, 1978",
  //         photo: "assets/KB24.png"
  //     },
  //     {
  //         firstName: "Lebron",
  //         lastName: "James",
  //         position: "Guard/Forward",
  //         height: "6-8",
  //         jerseyNumber: "23",
  //         location: "Akron, OH",
  //         birthDate: "December 30, 1984",
  //         photo: "assets/LBJ1.png"
  //     },
  //     {
  //         firstName: "Kevin",
  //         lastName: "Durant",
  //         position: "Forward",
  //         height: "6-10",
  //         jerseyNumber: "7",
  //         location: "Washington, D.C.",
  //         birthDate: "September 29, 1988",
  //         photo: "assets/KD2.png"
  //     },
  //     {
  //         firstName: "Dwayne",
  //         lastName: "Wade",
  //         position: "Guard",
  //         height: "6-4",
  //         jerseyNumber: "24",
  //         location: "Chicago, IL",
  //         birthDate: "January 17, 1982",
  //         photo: "assets/DW2.png"
  //     },
  //     {
  //         firstName: "Stephen",
  //         lastName: "Curry",
  //         position: "Guard",
  //         height: "6-3",
  //         jerseyNumber: "30",
  //         location: "Akron, OH",
  //         birthDate: "March 14, 1988",
  //         photo: "assets/SC.png"
  //     },
  //     {
  //         firstName: "Lebron",
  //         lastName: "James",
  //         position: "Guard/Forward",
  //         height: "6-8",
  //         jerseyNumber: "6",
  //         location: "Akron, OH",
  //         birthDate: "Decembeer 30, 1984",
  //         photo: "assets/LBJ4.png"
  //     }
];

player.forEach((player) => {
  let playerSlot = document.createElement("div");
  playerSlot.className = "roster-item-wrapper";

  playerSlot.innerHTML = `
    <div class="player-card-wrapper">
    <div class="player-card">
        <div class="player-card-header">
                <p class="PlayerCard-headerJerseyNumber">${player.jerseyNumber}</p>
                <div class="PlayerCard--headerName">
                    <span class="PlayerCard--headerFirstName">${player.firstName}</span>
                    <span class="PlayerCard--headerLastName">${player.lastName}</span>
                </div>
                <p class="PlayerCard--headerPosition">${player.position}</p>
            </div>
        <figure class="player-image" style="background-image: url('${player.photo}')">
            <div class="PlayerCard--stats">
                <ul class="PlayerCard--statList">
                    <li><span>HEIGHT</span><span>${player.height}</span></li>
                    <li><span>POSITION</span><span>${player.position}</span></li>
                    <li><span>DATE OF BIRTH</span><span>${player.birthDate}</span></li>
                    <li><span>FROM</span><span>${player.location}</span></li>
                </ul>
                <div class="PlayerCard--statBtnHolder">
                <a href="profile-${player.profileHtml}.html" class="PlayerCard--statBtn"><span role="button">Full Bio</span></a>
                <a href="" class="PlayerCard--statBtn"><span role="button">Player Stats</span></a>
                </div>
            </div>
        </figure>
    </div>
</div>
`;
  roster.appendChild(playerSlot);
});

document.getElementById("main-content-wrapper").appendChild(roster);

function hamburger() {
  let x = document.getElementById("hamburger-menu-nav");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
