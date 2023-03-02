let shoppingList = ['zucchero', 'carne', 'pasta', 'nutella', 'pane', 'acqua'];

let i = 0

const domList = document.getElementById('list');

while (i < shoppingList.length) {
    domList.innerHTML += `<li>${shoppingList[i]}</li>`
    i++;
}
