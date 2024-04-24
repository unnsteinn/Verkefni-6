const harry = {
  name: "Harry Potter",
  hair: "black",
};
const hermoine = {
  name: "Hermoine Granger",
  hair: "brown",
};
const ron = {
  name: "Ron Weasley",
  hair: "red",
};

const wizards = [harry, hermoine, ron];

function renderWizards() {
  const list = document.getElementById("list");

  wizards.forEach((wizard) => {
    const listItem = document.createElement("li");
    listItem.textContent = wizard.name;
    listItem.style.color = wizard.hair;
    list.appendChild(listItem);
  });
}

renderWizards();
