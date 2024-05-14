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


function renderItems()
{
    
    itemsDiv.innerHTML = null;
    for(const [idx, item] of Object.entries(items))
    {
        //styling the container
        const container = document.createElement("div");
        container.style.marginBottom = "15px";
        container.style.padding = "11px";
        container.style.paddingBottom =  "13px";
        container.style.backgroundColor = "black";
        container.style.color = "white";
        container.style.flexWrap = "wrap";

        //styling the "item" added into the todo list
        const text = document.createElement("p");
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.style.fontSize = "1.3em"
        text.textContent = item;

        //styling the button
        const button = document.createElement("button");
        button.textContent = "Delete";
        button.style.float = "right";
        //without function wrapper js will just call remove
        //Item without waiting us to click it; it encounters
        //line and immediatly executes it instead of waiting for
        //us to click it
        button.onclick = ()=> removeItem(idx);

        container.appendChild(text);
        container.appendChild(button);
        itemsDiv.appendChild(container);
    }
}
function loadItems()
{

    const oldItems = localStorage.getItem(storageKey);
    if(oldItems)
    {
        items = JSON.parse(oldItems);
    } 
    renderItems()
}
function saveItem()
{
    //converts items array to a string
    const stringItems = JSON.stringify(items);
    //override the current array with new items
    console.log("saveItem" + storageKey);
    localStorage.setItem(storageKey, stringItems);

}
function addItem()
{
    
    const value = input.value;
    if(!value)
    {
        alert("You cannot add an empty item");
        return
    }
    items.push(value);
    renderItems();
    //this clears what we type so after we add the item it clears
    //the input box
    input.value = "";
    console.log("items")
    saveItem();
}
function removeItem(idx)
{
    //remove 1 element from this index
    items.splice(idx, 1);
    //updates the items
    renderItems();
    saveItem()
}
document.addEventListener("DOMContentLoaded", loadItems);
daySelected.addEventListener('change', function() {
    const selectedDay = this.value.toLowerCase();
    console.log("Newly selected day:", selectedDay);
    switch(selectedDay)
    {
        case 'monday':
            console.log("hello it is monday");
            items = items1;
            itemsDiv = items1Div;
            storageKey = "items1";
            break;
        case 'tuesday':
            console.log("hello it is tuesday");
            items = items2;
            itemsDiv = items2Div;
            storageKey = "items2";
            break;
        case 'wednesday':
            items = items3;
            itemsDiv = items3Div;
            storageKey = "items3";
            break;
        case 'thursday':
            items = items4;
            itemsDiv = items4Div;
            storageKey = "items4";
            break;
        case 'friday':
            items = items5;
            itemsDiv = items5Div;
            storageKey = "items5";
            break;
        case 'saturday':
            items = items6;
            itemsDiv = items6Div;
            storageKey = "items6";
            break;
        case 'sunday':
            items = items7;
            itemsDiv = items7Div;
            storageKey = "items7";
            break;
    }
    loadItems();

  });