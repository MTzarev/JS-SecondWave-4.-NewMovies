function newMovie(arr) {
    let newArr = [];
    for (let info of arr) {
        info = info.split(` `);
        if (info.includes(`addMovie`)) {
            info.shift();
            info = info.join(` `);
            let obj = {};
            obj.name = info;
            newArr.push(obj);
        } else if (info.includes(`directedBy`)) {
            info = info.join(` `).split(` directedBy `);
            let movieName = info[0];
            let director = info[1];
            for (let movie of newArr) {
                if (movie.name === movieName) {
                    movie.director = director;
                }
            }
        } else if (info.includes(`onDate`)) {
            info = info.join(` `).split(` onDate `);
            let movieName = info[0];
            let date = info[1];
            for (let movie of newArr) {
                if (movie.name === movieName) {
                    movie.date = date;
                }
            }
        }
    }
    for (let line of newArr) {
        if (line.hasOwnProperty(`name`) && line.hasOwnProperty(`date`) && line.hasOwnProperty(`director`)) {
            let finalRes = JSON.stringify(line);
            console.log(finalRes);
        }
    }
}
newMovie([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);
