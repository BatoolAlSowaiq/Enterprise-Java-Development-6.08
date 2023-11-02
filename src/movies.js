
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    // Get all directors
    const directors = moviesArray.map(movie => movie.director);
    // Use set to remove all duplication and then convert it back to array
    return Array.from(new Set(directors));    
}

console.log(`Number of movie : ${movies.length}`);
console.log(`Number of Directors : ${getAllDirectors(movies).length}`);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    
    // Filter the movies 
    const stevenDramaMovies = moviesArray.filter((movie) =>  movie.director === "Steven Spielberg" & movie.genre.includes("Drama"));
    return stevenDramaMovies.length;

}
console.log(`Steven's drama movies : ${howManyMovies(movies)}`);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    // Check if there is no movie
    if (moviesArray.length === 0) return 0;
    
    // Apply reduce to some all scores 
     const sum = moviesArray.reduce((acc,curr) => acc + (curr.score || 0 ) ,0);
     const avg = sum / moviesArray.length;
     
     // Return the avg with 2 decimal 
     return Number(avg.toFixed(2));
}
console.log(`Avg : ${scoresAverage(movies)} , type : ${typeof(scoresAverage(movies))}`);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    // Filter the movies to get the darma movies 
    const dramaMovies = moviesArray.filter((movie) => movie.genre.includes("Drama"));
    if (dramaMovies.length === 0) return 0;

    // Calculate the sum of the avg of drama movie 
    const sum = dramaMovies.reduce((acc,curr) => acc + (curr.score || 0 ) ,0);
    return Number(( sum / dramaMovies.length ).toFixed(2));
}
console.log(`Drama Avg : ${dramaMoviesScore(movies)} , type : ${typeof(dramaMoviesScore(movies))}`);


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    // Create a deep copy of movies
    const deepCopy = JSON.parse(JSON.stringify(moviesArray));

    const sortedMovies = deepCopy.sort((a, b) => {
      if (a.year !== b.year)  return a.year - b.year;
      if (a.title !== b.title) return a.title.localeCompare(b.title);
    })

    return sortedMovies;
}
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
    // Create a deep copy of movies
    const deepCopy = JSON.parse(JSON.stringify(moviesArray));
    // Sort all the movies based on title, and then extract 20 of them 
    const sortedMovies = deepCopy.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 20);
    
  return sortedMovies.map(movie => movie.title);
}
console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    
    const updatedMovies = moviesArray.map((movie) => {
       
        const duration = movie.duration.split(" ");
        let totalDuration = 0;
    
        if (duration[0].includes("h")) {
          const hours = Number(duration[0].match(/\d+/)[0]);
          totalDuration += hours * 60;
        }
    
        if (duration[1] && duration[1].includes("min")) {
          const minutes = Number(duration[1].match(/\d+/)[0]);
          totalDuration += minutes;
        }
        // Return new object with same value and updated duration
        return { ...movie, duration: totalDuration };
    })

    return updatedMovies;
}
