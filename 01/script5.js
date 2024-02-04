const nbaTeams = [
    {
        team: "Warriors",
        currentlyPlayers: ["J.Kuminga", "A.Wiggins", "D.Green", "B.Podziemski", "S.Curry", "D.Saric", "K.Thompson", "K.Looney"],
        stadium: "Chase Center",
        titles: {
            nbaTitles: 7,
            championshipsWon: [1947, 1956, 1975, 2015, 2017, 2018, 2022]
        },
        based: "San Francisco - California"
    },
    {
        team: "Celtics",
        currentlyPlayers: ["J.Tatum", "J.Brown", "K.Porzingis", "D.White", "J.Holiday", "A.Horford", "S.Hauser", "O.Brisset"],
        stadium: "TD Garden",
        titles: {
            nbaTitles: 17,
            championshipsWon: [1957, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1968, 1969, 1974, 1976, 1981, 1984, 1986, 2008]
        },
        based: "Boston - Massachusetts"
    },
    {
        team: "Lakers",
        currentlyPlayers: ["L.James", "T.Prince", "A.Davis", "D.Russell", "A.Reaves", "C.Wood", "R.Hachimura", "M.Christie" ],
        stadium: "Crypto.com Arena",
        titles: {
            nbaTitles: 17,
            championshipsWon: [1949, 1950, 1952, 1953, 1954, 1972, 1980, 1982, 1985, 1987, 1988, 2000, 2001, 2002, 2009, 2010, 2020]
        },
        based: "Los Angeles - California"
    },
    {
        team: "Heat",
        currentlyPlayers: ["J.Butler", "Bam Adebayo", "T.Herro", "T.Rozier", "J.Richardson", "C.Martin", "K.Love", "J.Jaquez Jr"],
        stadium: "Kaseya Center",
        titles: {
            nbaTitles: 3,
            championshipsWon: [2006, 2012, 2013]
        },
        based: "Miami - Florida"
    }

];

let istrue = false

for (const element of nbaTeams) {
    if (element.team === "Heat") {
        istrue = true
        console.log(element)
        
    } 
    
}

if (istrue === false) {
    console.log("this team does not exist")
}