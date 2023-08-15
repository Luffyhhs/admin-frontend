import * as boxIcon from "react-icons/bi";

export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "HomePage",
        url: "/",
        icon: <boxIcon.BiHome />,
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: <boxIcon.BiUser />,
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: <boxIcon.BiUser />,
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: <boxIcon.BiLogoProductHunt />,
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: <boxIcon.BiCart />,
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: <boxIcon.BiMessageSquareDetail />,
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: <boxIcon.BiLayout />,
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: <boxIcon.BiNotepad />,
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: <boxIcon.BiFileBlank />,
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: <boxIcon.BiCalendar />,
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: <boxIcon.BiCog />,
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: <boxIcon.BiDetail />,
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: <boxIcon.BiChart />,
      },
      {
        id: 2,
        title: "Reports",
        url: "/",
        icon: <boxIcon.BiFile />,
      },
    ],
  },
];

export const topTopUpUser = [
  {
    id: 1,
    img: `https://unsplash.com/photos/woman-doing-pose-AoL-mVxprmk`,
    username: "Elva",
    email: "elva@gmail.com",
    amount: "1000000",
  },
  {
    id: 2,
    img: `https://unsplash.com/photos/vyAGTBYSkqU`,
    username: "Diana",
    email: "diana@gmail.com",
    amount: "900000",
  },
  {
    id: 3,
    img: `https://unsplash.com/photos/3_I3GXWldEw`,
    username: "Monica",
    email: "monica@gmail.com",
    amount: "800000",
  },
  {
    id: 4,
    img: `https://unsplash.com/photos/woman-doing-pose-AoL-mVxprmk`,
    username: "Elva",
    email: "elva@gmail.com",
    amount: "1000000",
  },
  {
    id: 5,
    img: `https://unsplash.com/photos/vyAGTBYSkqU`,
    username: "Diana",
    email: "diana@gmail.com",
    amount: "1000000",
  },
  {
    id: 6,
    img: `https://unsplash.com/photos/3_I3GXWldEw`,
    username: "Monica",
    email: "monica@gmail.com",
    amount: "1000000",
  },
  {
    id: 7,
    img: `https://unsplash.com/photos/woman-doing-pose-AoL-mVxprmk`,
    username: "Elva",
    email: "elva@gmail.com",
    amount: "1000000",
  },
  {
    id: 8,
    img: `https://unsplash.com/photos/vyAGTBYSkqU`,
    username: "Elva",
    email: "elva@gmail.com",
    amount: "1000000",
  },
  {
    id: 9,
    img: `https://unsplash.com/photos/3_I3GXWldEw`,
    username: "Elva",
    email: "elva@gmail.com",
    amount: "1000000",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: <boxIcon.BiBarChartSquare />,
  title: "Total Users",
  number: "11,238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxGames = {
  color: "skyblue",
  icon: <boxIcon.BiCartDownload />,
  title: "Total Products",
  number: "238",
  dataKey: "games",
  percentage: 21,
  chartData: [
    { name: "Sun", games: 400 },
    { name: "Mon", games: 600 },
    { name: "Tue", games: 500 },
    { name: "Wed", games: 700 },
    { name: "Thu", games: 400 },
    { name: "Fri", games: 500 },
    { name: "Sat", games: 450 },
  ],
};

export const chartBoxIncome = {
  color: "gold",
  icon: <boxIcon.BiCreditCard />,
  title: "Income",
  number: "5M MMK",
  dataKey: "games",
  percentage: 21,
  chartData: [
    { name: "Sun", games: 400 },
    { name: "Mon", games: 600 },
    { name: "Tue", games: 500 },
    { name: "Wed", games: 700 },
    { name: "Thu", games: 400 },
    { name: "Fri", games: 500 },
    { name: "Sat", games: 450 },
  ],
};

export const chartBoxConversion = {
  color: "teal",
  icon: <boxIcon.BiCalculator />,
  title: "Ratio",
  number: "2.6",
  dataKey: "games",
  percentage: 21,
  chartData: [
    { name: "Sun", games: 400 },
    { name: "Mon", games: 600 },
    { name: "Tue", games: 500 },
    { name: "Wed", games: 700 },
    { name: "Thu", games: 400 },
    { name: "Fri", games: 500 },
    { name: "Sat", games: 450 },
  ],
};

export const barChartBoxIncome = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    { name: "Sun", profit: 5000 },
    { name: "Mon", profit: 7000 },
    { name: "Tue", profit: 6000 },
    { name: "Wed", profit: 5000 },
    { name: "Thu", profit: 4000 },
    { name: "Fri", profit: 3000 },
    { name: "Sat", profit: 4500 },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visits",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    { name: "Sun", visit: 5000 },
    { name: "Mon", visit: 7000 },
    { name: "Tue", visit: 6000 },
    { name: "Wed", visit: 5000 },
    { name: "Thu", visit: 4000 },
    { name: "Fri", visit: 3000 },
    { name: "Sat", visit: 4500 },
  ],
};
