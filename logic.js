class SuperHero {
    constructor(name, superpower, planet) {
        this.name = name;
        this.superpower = superpower;
        this.planet = planet;
    }

    planetChange(planet) {
        this.planet = planet;
    }
}

var ironman = new SuperHero("ironman", "iron suite", "earth")

/******************************************************************* */

class song {
    constructor(songName, bandName) {
        this.songName = songName;
        this.bandName = bandName;
        this.songName = songName;
        this.bandName = bandName;
    }

    countName() {
        var x = (this.songName).split(" ").length;
        return x
    }

}

var b3trflk = new song("b3trflk", "wa2l kfoori")

/********************************************************************* */
class cat {
    constructor(tiredness, hunger, lonliness, happiness) {
        this.tiredness = tiredness ;
        this. hunger = hunger;    
        this.lonliness = lonliness;
        this.happiness = happiness;
    }

    feed() {
        if (this.tiredness <= 7)
        this.tiredness = this.tiredness+3;
        else if (this.tiredness === 8)
        this.tiredness = this.tiredness +2;
        else if (this.tiredness === 9)
        this.tiredness = this.tiredness +1 ;
        else;

        // this. hunger = hunger-5;
        // this.happiness = happiness+2; 
    }

    // sleep() {
    //     var x = (this.songName).split(" ").length;
    //     return x
    // }

}

var meme = new cat(2,6,7)

var nene = new cat (9,9,1,1)

/********************************************************************* */

class BookList
{
    constructor(numOfBooksRead, numOfBooksNotRead, referenceNextBook, referenceCurrentBook, referenceLastBook, arrOfBooks) {
        this.numOfBooksRead = numOfBooksRead ;
        this. numOfBooksNotRead = numOfBooksNotRead;    
        this.referenceNextBook = referenceNextBook;
        this.referenceCurrentBook = referenceCurrentBook;
        this.referenceLastBook = referenceLastBook;
        this.arrOfBooks = arrOfBooks;

    }
    add(book)
    {

    }

    
}

class Book
{
    constructor(title, genre, author, read, readDate) {
        this.title = title ;
        this. genre = genre;    
        this.author = author;
        this.read = read;
        this.readDate = readDate;

    }
}



/********************************************************************* */