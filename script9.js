const nbaPlayers = [
    {
        player: "Stephen Curry",
        team: "Golden State Warriors",
        age: 35 ,
        instagram: "stephencurry30",
        born: "March 14, 1988 Akron, Ohio, U.S.",
        awards: {
            nbaAllStar: 10,
            nbaAllStarYears: [2014, 2015, 2016, 2017, 2018, 2019, 2021, 2022, 2023, 2024],
            nbaChampion: 4,
            nbaChampionYears: [2015, 2017, 2018, 2022],
        },


    },
    {
        player: "Jayson Tatum",
        team: "Boston Celtics",
        age: 25 ,
        instagram: "jaytatum0",
        born: "March 3, 1998 St. Louis, Missouri, U.S.",
        awards: {
            nbaAllStar: 5,
            nbaAllStarYears: [2020, 2021, 2022, 2023, 2024],
            nbaChampion: 0,
            nbaChampionYears: 0,
        },


    },
    {
        player: "LeBron James",
        team: "Los Angeles Lakers",
        age: 39 ,
        instagram: "kingjames",
        born: "December 30, 1984, Akron, Ohio, U.S.",
        awards: {
            nbaAllStar: 20,
            nbaAllStarYears: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
            nbaChampion: 4,
            nbaChampionYears: [2012, 2013, 2016, 2020],
        },


    },
    {
        player: "Nikola Jokic",
        team: "Denver Nuggets",
        age: 28,
        instagram: "not found",
        born: "February 19, 1995, Sombor, Serbia, Yugoslavia",
        awards: {
            nbaAllStar: 6,
            nbaAllStarYears: [2019, 2020, 2021, 2022, 2023, 2024],
            nbaChampion: 1,
            nbaChampionYears: [2023],
        },


    },
    {
        player: "Klay Thompson",
        team: "Golden State Warriors",
        age: 33,
        instagram: "klaythompson",
        born: "February 8, 1990, Los Angeles, California, U.S.",
        awards: {
            nbaAllStar: 5,
            nbaAllStarYears: [2015, 2016, 2017, 2018, 2019],
            nbaChampion: 4,
            nbaChampionYears: [2015, 2017, 2018, 2022],
        },


    },

]

 // Utilizar for 2x somente em caso de arrays 

for (const element of nbaPlayers) {
    const player = element.player
    console.log(player)

    const team = element.team
    console.log(team)
    
    const awards = element.awards.nbaAllStarYears
    for (const element2 of awards) {
    console.log(element2)   
    };



    
}