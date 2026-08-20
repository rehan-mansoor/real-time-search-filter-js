let cardsContainer = document.querySelector(".cards-container");
let searchInput = document.querySelector("input");

let users = [
  {
    name: "Mr Strange",
    pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
    bio: "aesthetic overload | living in lowercase",
  },

  {
    name: "Chloe",
    pic: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D",
    bio: "Finding beauty in the ordinary.",
  },

  {
    name: "Alexander",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHwy",
    bio: "Lost in the moment, found in the silence.",
  },

  {
    name: "Ethan",
    pic: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHwy",
    bio: "Creating my own path, one day at a time.",
  },

  {
    name: "Aurora",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHwy",
    bio: "A little mystery, a lot of magic.",
  },

  {
    name: "Adrian",
    pic: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D",
    bio: "Less talking, more living.",
  },

  {
    name: "Lucas",
    pic: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D",
    bio: "Somewhere between chaos and calm.",
  },

  {
    name: "Sophie",
    pic: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D",
    bio: "Dreaming big, living softly.",
  },

  {
    name: "Matteo",
    pic: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D",
    bio: "Music on, world off.",
  },

  {
    name: "Isabella",
    pic: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D",
    bio: "Coffee, sunsets, and little adventures.",
  },

  {
    name: "Leonardo",
    pic: "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY3fHxwZXJzb258ZW58MHx8MHx8fDI%3D",
    bio: "Making memories that actually matter.",
  },

  {
    name: "Ryan",
    pic: "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIzfHxwZXJzb258ZW58MHx8MHx8fDI%3D",
    bio: "Quiet soul with a restless mind.",
  },
];

users.forEach(function (user) {
  let card = document.createElement("div");

  card.classList.add("cards");

  let img = document.createElement("img");

  let content = document.createElement("div");

  content.classList.add("content");

  let heading = document.createElement("h3");

  let bio = document.createElement("p");

  img.src = user.pic;

  heading.textContent = user.name;

  bio.textContent = user.bio;

  content.appendChild(heading);

  content.appendChild(bio);

  card.appendChild(img);

  card.appendChild(content);

  cardsContainer.appendChild(card);
});

searchInput.addEventListener("input", function () {
  let filteredUsers = users.filter(function (user) {
    return user.name.toLowerCase().includes(searchInput.value.toLowerCase());
  });

  cardsContainer.innerHTML = "";

  filteredUsers.forEach(function (user) {
    let card = document.createElement("div");

    card.classList.add("cards");

    let img = document.createElement("img");

    let content = document.createElement("div");

    content.classList.add("content");

    let heading = document.createElement("h3");

    let bio = document.createElement("p");

    img.src = user.pic;

    heading.textContent = user.name;

    bio.textContent = user.bio;

    content.appendChild(heading);

    content.appendChild(bio);

    card.appendChild(img);

    card.appendChild(content);

    cardsContainer.appendChild(card);
  });
});
