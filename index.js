const countvalue = document.getElementById('cnt');
console.log(countvalue.innerText);

function increament()
{
    let value = parseInt(countvalue.innerText);
    value=value+1;
    countvalue.innerText=value;
    console.log("Increment counter is clicked with value ",countvalue.innerText);
}
function decreament()
{
    let value = parseInt(countvalue.innerText);
    value=value-1;
    countvalue.innerText=value;
    console.log("Decrement counter is clicked with value ",countvalue.innerText);
}

var btni = document.getElementById('bti');
btni.addEventListener('click',increament);
var btnd = document.getElementById('btd');
btnd.addEventListener('click',decreament);
