export const initialTravelPlan = {
  // eita dekhun ekta deeply nested object,
  // eita to object object to itterable noi, array hocche itterable
  // ar uddessho hocche complete a click korle list theke seita bad hoye jabe, eita muloto ei data diye korte gele j karor matha hang hoye jabe , so directly react amader k deep nested data k avoide korte bolche & then amader k normalized kore sei data k use korte bolche, cholum amra normalize data k niye asi eibar r tar age ei kaj tuku k commit kori
  id: 0,
  title: "(Root)",
  // eita root object
  childPlaces: [
    // eita child object
    // tobe ei array ar child place gulo k amra map korbo
    {
      id: 1,
      title: "Earth",
      childPlaces: [
        // ei gulor o child places ache jeigulo kew map kora laghte pare
        // eita abar child ar child
        {
          id: 2,
          title: "Africa",
          childPlaces: [
            // eita abar tar o child
            // muloto ei dhoroner data manage kora khub kothin, ei jonno normally amader k data k normalize kore nite hoi, jai hok akhn amra prothome ei data k render kore ui te dekhabo then next step data manage niye ktha bolbo
            {
              id: 3,
              title: "Botswana",
              childPlaces: [],
            },
            {
              id: 4,
              title: "Egypt",
              childPlaces: [],
            },
            {
              id: 5,
              title: "Kenya",
              childPlaces: [],
            },
            {
              id: 6,
              title: "Madagascar",
              childPlaces: [],
            },
            {
              id: 7,
              title: "Morocco",
              childPlaces: [],
            },
            {
              id: 8,
              title: "Nigeria",
              childPlaces: [],
            },
            {
              id: 9,
              title: "South Africa",
              childPlaces: [],
            },
          ],
        },
        {
          id: 10,
          title: "Americas",
          childPlaces: [
            {
              id: 11,
              title: "Argentina",
              childPlaces: [],
            },
            {
              id: 12,
              title: "Brazil",
              childPlaces: [],
            },
            {
              id: 13,
              title: "Barbados",
              childPlaces: [],
            },
            {
              id: 14,
              title: "Canada",
              childPlaces: [],
            },
            {
              id: 15,
              title: "Jamaica",
              childPlaces: [],
            },
            {
              id: 16,
              title: "Mexico",
              childPlaces: [],
            },
            {
              id: 17,
              title: "Trinidad and Tobago",
              childPlaces: [],
            },
            {
              id: 18,
              title: "Venezuela",
              childPlaces: [],
            },
          ],
        },
        {
          id: 19,
          title: "Asia",
          childPlaces: [
            {
              id: 20,
              title: "China",
              childPlaces: [],
            },
            {
              id: 21,
              title: "India",
              childPlaces: [],
            },
            {
              id: 22,
              title: "Singapore",
              childPlaces: [],
            },
            {
              id: 23,
              title: "South Korea",
              childPlaces: [],
            },
            {
              id: 24,
              title: "Thailand",
              childPlaces: [],
            },
            {
              id: 25,
              title: "Vietnam",
              childPlaces: [],
            },
          ],
        },
        {
          id: 26,
          title: "Europe",
          childPlaces: [
            {
              id: 27,
              title: "Croatia",
              childPlaces: [],
            },
            {
              id: 28,
              title: "France",
              childPlaces: [],
            },
            {
              id: 29,
              title: "Germany",
              childPlaces: [],
            },
            {
              id: 30,
              title: "Italy",
              childPlaces: [],
            },
            {
              id: 31,
              title: "Portugal",
              childPlaces: [],
            },
            {
              id: 32,
              title: "Spain",
              childPlaces: [],
            },
            {
              id: 33,
              title: "Turkey",
              childPlaces: [],
            },
          ],
        },
        {
          id: 34,
          title: "Oceania",
          childPlaces: [
            {
              id: 35,
              title: "Australia",
              childPlaces: [],
            },
            {
              id: 36,
              title: "Bora Bora (French Polynesia)",
              childPlaces: [],
            },
            {
              id: 37,
              title: "Easter Island (Chile)",
              childPlaces: [],
            },
            {
              id: 38,
              title: "Fiji",
              childPlaces: [],
            },
            {
              id: 39,
              title: "Hawaii (the USA)",
              childPlaces: [],
            },
            {
              id: 40,
              title: "New Zealand",
              childPlaces: [],
            },
            {
              id: 41,
              title: "Vanuatu",
              childPlaces: [],
            },
          ],
        },
      ],
    },
    {
      id: 42,
      title: "Moon",
      childPlaces: [
        {
          id: 43,
          title: "Rheita",
          childPlaces: [],
        },
        {
          id: 44,
          title: "Piccolomini",
          childPlaces: [],
        },
        {
          id: 45,
          title: "Tycho",
          childPlaces: [],
        },
      ],
    },
    {
      id: 46,
      title: "Mars",
      childPlaces: [
        {
          id: 47,
          title: "Corn Town",
          childPlaces: [],
        },
        {
          id: 48,
          title: "Green Hill",
          childPlaces: [],
        },
      ],
    },
  ],
};
