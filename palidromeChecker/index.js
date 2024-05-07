const input = document.getElementById("inputTag");

function reverseString(string)
{
    // splits the string given
    // into letters then reverses it and joins it back together
    return string.split("").reverse().join("");
}
function check()
{
    const value = input.value;
    const reverse = reverseString(value);
    if(reverse == value)
    {
        alert("it's a palindrome");
    }
    else
    {
        alert("not a palindrome")
    }
}