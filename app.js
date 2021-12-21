function naughtyOrNice()
{
    var userEvaluation = confirm("Ho ho ho! Were you on the nice list this year?");
    var messagefromsanta = "";

    if (userEvaluation == true)
    {
        messagefromsanta = "Ho ho ho, very good!";
    }
    else
    {
        messagefromsanta = "Hmmm, maybe next year!"
    }

    document.write(messagefromsanta);
}

naughtyOrNice();

function christmasTracker(currentMonth)
{
    var christmasTime = "";

    if (!currentMonth)
    {
        currentMonth = prompt("What's the current month (in number form)?");
    }

    if (currentMonth == 12)
    {
        christmasTime = "Christmas is almost here!";
    }
    else if (currentMonth <= 11 && currentMonth >= 1)
    {
        christmasTime = "Christmas can't come any sooner!";
    }
    else
    {
        console.log("Either you made a mistake or you're from a different planet!");
        christmasTracker();
    }

    document.write(christmasTime);
}

christmasTracker();

function christmasWishlist()
{
    var name = prompt("What's your name?");
    while (!name)
    {
        name = prompt("Error: Please enter a name!");
    }
    var gift = prompt("What do you want most for Christmas?");
    while (!gift)
    {
        gift = prompt("Error: Please enter what you want!");
    }
    var food = prompt("What's your favorite Christmas food?");
    while (!food)
    {
        food = prompt("Error: Please enter a food!");
    }
    
    var myWishlist = "Hi, my name is " + name + ", and the thing I want the most for Christmas is " + gift + ". While I wait for Christmas day, I think I'll eat a lot of " + food + ".";

    document.write(myWishlist);
}

christmasWishlist();






