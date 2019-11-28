const initialState = {
  services: [
    {
      name: "Amazon Prime Video",
      monthlyCost: 699,
      subscribed: true,
      active: true
    },
    {
      name: "Disney Plus",
      monthlyCost: 899,
      subscribed: true,
      active: true
    },
    {
      name: "Foxtel Now",
      monthlyCost: 5500,
      subscribed: true,
      active: true
    },
    {
      name: "Apple TV Plus",
      monthlyCost: 799,
      subscribed: true,
      active: true
    },
    {
      name: "Netflix",
      monthlyCost: 999,
      subscribed: true,
      active: true
    },
    {
      name: "Stan",
      monthlyCost: 1000,
      subscribed: true,
      active: true
    }
  ],
  watchlist: [
    {
      title: "The X-Files (1993)",
      url: "https://www.justwatch.com/au/tv-show/the-x-files",
      services: ["SBS On Demand", "Foxtel Now"]
    },
    {
      title: "The Flash (2014)",
      url: "https://www.justwatch.com/au/tv-show/the-flash",
      services: ["Stan", "Foxtel Now", "tenplay"]
    },
    {
      title: "Stardust (2007)",
      url: "https://www.justwatch.com/au/movie/stardust",
      services: ["Foxtel Now", "Amazon Prime Video", "SBS On Demand"]
    },
    {
      title: "Rick and Morty (2013)",
      url: "https://www.justwatch.com/au/tv-show/rick-and-morty",
      services: ["Netflix"]
    },
    {
      title: "The Mandalorian (2019)",
      url: "https://www.justwatch.com/au/tv-show/the-mandalorian",
      services: ["Disney Plus", "Disney Plus"]
    },
    {
      title: "See (2019)",
      url: "https://www.justwatch.com/au/tv-show/see",
      services: ["Apple TV Plus"]
    }
  ]
};

export default initialState;
