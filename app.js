var naughtyornice = confirm("Ho ho ho! Were you on the nice list this year?");

var messagefromsanta = "";

if (naughtyornice == true)
{
    messagefromsanta = "Ho ho ho, very good!";
}
else
{
    messagefromsanta = "Hmmm, maybe next year!"
}

console.log(messagefromsanta);

var christmastracker = prompt("What's the current month (in number form)?");

var christmastime = "";

if (christmastracker == 12)
{
    christmastime = "Christmas is almost here!";
}
else
{
    christmastime = "Christmas can't come any sooner!";
}

console.log(christmastime);