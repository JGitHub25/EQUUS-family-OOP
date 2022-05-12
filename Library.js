class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get ratings() {
    return this._ratings;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }

  set isCheckedOut(bool) {
    this._isCheckedOut = bool;
  }
  //
  getAverageRating() {
    return (this.ratings.reduce((a, b) => a + b) / this.ratings.length).toFixed(
      2
    );
  }
  //
  addRating(newRating) {
    if (typeof newRating !== "string" && typeof newRating !== "number") {
      console.log("Please enter a number");
    }
    this._ratings.push(+newRating);
  }
  //
  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
}

const sub = new CD("The suburbs", "Arcade Fire", [
  "Suburban war",
  "Mountains beyond nountains",
]);
console.log(sub);
console.log(sub.title);
console.log(sub.ratings);
console.log(sub.artist);
console.log(sub.songs);
console.log(sub.isCheckedOut);
sub.setIsCheckedOut = true;
console.log(sub.isCheckedOut);

const historyOfEverything = new Book(
  "A Short History of Nearly Everything",
  "Bill Bryson",
  544
);
console.log(historyOfEverything);
console.log(historyOfEverything.title);
console.log(historyOfEverything.ratings);
console.log(historyOfEverything.author);
console.log(historyOfEverything.pages);
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(2);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());
console.log(historyOfEverything.ratings);

const speed = new Movie("Speed", "Jan de Bont", 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
console.log(speed.ratings);
