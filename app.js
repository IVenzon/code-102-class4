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
else if (christmastracker <= 11 && christmastracker >= 1)
{
    christmastime = "Christmas can't come any sooner!";
}
else
{
    christmastime = "Either you made a mistake or you're from a different planet!";
}

console.log(christmastime);

var whatIWant1 = prompt("What's your name?");
var whatIWant2 = prompt("What do you want most for Christmas?");
var whatIWant3 = prompt("What's your favorite Christmas food?");

var myWishlist = "Hi, my name is " + whatIWant1 + ", and the thing I want the most for Christmas is " + whatIWant2 + ". While I wait for Christmas day, I think I'll eat a lot of " + whatIWant3 + ".";

console.log(myWishlist);

