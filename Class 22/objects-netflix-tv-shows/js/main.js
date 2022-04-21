//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShow {
  constructor(name, year, genre, rating)
  {
    this.name = name
    this.year = year
    this.genre = genre
    this.rating = rating
  }

  incrementSeason()
  {
    if(this.season === undefined || typeof this.season != "number") this.season = 1
    else ++this.season
  }

  increaseRating()
  {
    if(typeof this.rating != "number" || ++this.rating >= 5) this.rating = 5
  }

  decreaseRating()
  {
    if(typeof this.rating != 'number' || --this.rating <= 0) this.rating = 0
  }
}

let witcher = new NetflixShow("Witcher", 2020, "spooky", 5)
witcher.incrementSeason()
console.log(witcher);
//after first season :(
witcher.incrementSeason()
witcher.decreaseRating()
witcher.decreaseRating()
witcher.decreaseRating()
console.log(witcher);
