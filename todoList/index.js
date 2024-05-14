let items1 = [];
let items2 = [];
let items3 = [];
let items4 = [];
let items5 = [];
let items6 = [];
let items7 = [];

let items1Div = document.getElementById("items");
const items2Div = document.getElementById("items2");
const items3Div = document.getElementById("items3");
const items4Div = document.getElementById("items4");
const items5Div = document.getElementById("items5");
const items6Div = document.getElementById("items6");
const items7Div = document.getElementById("items7");

const daySelected = document.getElementById("daySelector")
const selectedDay = daySelected.value;
const input = document.getElementById("itemInput");
let storageKey = "items1";
let items = items1;
let itemsDiv = items1Div;


function renderItems(currentItems, currentDiv, dayKey) {
    console.log("Rendering items for div:", currentDiv.id, "dayKey:", dayKey);

    currentDiv.innerHTML = null;
    currentItems.forEach((item, idx) => {
        const container = document.createElement("div");
        container.style = "margin-bottom: 15px; padding: 11px; padding-bottom: 13px; background-color: black; color: white; flex-wrap: wrap;";

        const text = document.createElement("p");
        text.style = "display: inline; margin-right: 10px; font-size: 1.3em;";
        text.textContent = item;

        const button = document.createElement("button");
        button.textContent = "Delete";
        button.style.float = "right";
        button.setAttribute('data-day-key', dayKey); // Ensure this matches the dayMap keys
        button.onclick = () => removeItem(idx, button.getAttribute('data-day-key')); // Use getAttribute to retrieve the dayKey

        container.appendChild(text);
        container.appendChild(button);
        currentDiv.appendChild(container);
    });
}


function addItem() {
    const dayKey = daySelected.value.toLowerCase();  // Get the selected day from the dropdown
    const dayMap = {
        'monday': { items: items1, div: items1Div, key: 'monday' },
        'tuesday': { items: items2, div: items2Div, key: 'tuesday' },
        'wednesday': { items: items3, div: items3Div, key: 'wednesday' },
        'thursday': { items: items4, div: items4Div, key: 'thursday' },
        'friday': { items: items5, div: items5Div, key: 'friday' },
        'saturday': { items: items6, div: items6Div, key: 'saturday' },
        'sunday': { items: items7, div: items7Div, key: 'sunday' }
    };

    const dayData = dayMap[dayKey];
    if (dayData) {
        items = dayData.items;
        itemsDiv = dayData.div;
    }

    const value = input.value;
    if (!value) {
        alert("You cannot add an empty item");
        return;
    }
    items.push(value);
    renderItems(items, itemsDiv, dayData.key);  // Pass the current day's key
    input.value = "";
}

function removeItem(idx, dayKey) {
    console.log("Attempting to remove item at index", idx, "from day", dayKey);

    const dayMap = {
        'monday': { items: items1, div: items1Div },
        'tuesday': { items: items2, div: items2Div },
        'wednesday': { items: items3, div: items3Div },
        'thursday': { items: items4, div: items4Div },
        'friday': { items: items5, div: items5Div },
        'saturday': { items: items6, div: items6Div },
        'sunday': { items: items7, div: items7Div }
    };

    const dayData = dayMap[dayKey];
    if (dayData) {
        dayData.items.splice(idx, 1); // Remove the item
        renderItems(dayData.items, dayData.div, dayKey); // Re-render the items
    } else {
        console.log("Invalid day key:", dayKey); // Check for invalid keys
    }
}


daySelected.addEventListener('change', function() {
    const dayKey = this.value.toLowerCase(); // Assuming the values are like 'monday', 'tuesday'... and match the keys like 'items1', 'items2', etc.
    const dayMap = {
        'monday': { items: items1, div: items1Div, key: 'items1' },
        'tuesday': { items: items2, div: items2Div, key: 'items2' },
        'wednesday': { items: items3, div: items3Div, key: 'items3' },
        'thursday': { items: items4, div: items4Div, key: 'items4' },
        'friday': { items: items5, div: items5Div, key: 'items5' },
        'saturday': { items: items6, div: items6Div, key: 'items6' },
        'sunday': { items: items7, div: items7Div, key: 'items7' }
        // Define the mapping for all days
    };

    const dayData = dayMap[dayKey];
    if (dayData) {
        items = dayData.items; // Set the current items array
        itemsDiv = dayData.div; // Set the current div
        renderItems(dayData.items, dayData.div, dayData.key); // Render with the correct context
    }
});
