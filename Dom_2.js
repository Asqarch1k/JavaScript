const container = document.querySelector(".container");
const filterStatus = document.querySelector("#filter_status");
const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

function render() {
  container.innerHTML = "";
  filterStatus.textContent = isSorted ? "A-Z" : "Z-A";
  users.forEach((user) => {
    const { email, name, phone } = user;
    const box = document.createElement("div");
    const avatar = document.createElement("div");
    const h3 = document.createElement("h3");
    const emailElement = document.createElement("a");
    const callMeBtn = document.createElement("button");
    const a = document.createElement("a");
    a.setAttribute("href", `tel:${phone}`);
    a.textContent = "Call me";
    box.setAttribute("class", "box");
    callMeBtn.appendChild(a);
    emailElement.setAttribute("href", `milto:${email}`);
    h3.textContent = name;
    avatar.setAttribute("class", "avatar");
    box.appendChild(avatar);
    box.appendChild(h3);
    box.appendChild(emailElement);
    box.appendChild(callMeBtn);

    container.appendChild(box);
  });
}

function filter() {
  users.sort((a, b) => {
    if (isSorted) {
      return b.name.localeCompare(a.name);
    } else {
      return a.name.localeCompare(b.name);
    }
  });
  isSorted = !isSorted;
  render();
}

function search(searchValue = "") {
  const newUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchValue.toLowerCase().trim())
  );
  render(searchValue ? newUsers : users);
}

function deleteUser({ id }) {
  newUsers = newUsers.filter((user) => user.id !== id);
  render(newUsers);
}

function editUser(({id, name, email, phone})){
    const editUserIdx = users.findIndex((user) )
}

function editUsers
filter();
