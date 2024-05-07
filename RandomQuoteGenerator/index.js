const quotes = [
    "doin your  mom",
    "I love bocchi she is literally me",
    "Erm what the sigma",
    "Breakcore and stuff",
    "baby gronk????",
    "erm no bitches?",

]


const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote()
{
    if(usedIndexes.size >= quotes.length)
    {
        usedIndexes.clear();
    }
    // math.random generates a number from 0-1 excluding 0 and 1 
    //we take that number and multiply by the length of our array
    //however we need to take into account that the index is 0 - 9 and lenth
    // gives 10 so we use . floor to round down
    while(true)
    {
        const randomIdx = Math.floor(Math.random() * quotes.length);
        if(usedIndexes.has(randomIdx))
        {
            //skip this iteration and go to the next
            continue;
        }
        const quote = quotes [randomIdx];
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break;
    }


}