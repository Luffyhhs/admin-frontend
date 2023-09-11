import * as boxIcon from "react-icons/bi";
import * as faIcon from "react-icons/fa";
import * as riIcon from "react-icons/ri";
import * as ioIcon from "react-icons/io";

export const menu = [
  {
    id: 1,
    title: "Dashboard",
    url: "/",
    icon: <boxIcon.BiHome />,
  },
  {
    id: 2,
    title: "Units",
    url: "/createUnits",
    icon: <boxIcon.BiCoinStack />,
    iconClosed: <riIcon.RiArrowDownSFill />,
    iconOpened: <riIcon.RiArrowUpSFill />,
    subNav: [
      {
        title: "Create Units",
        url: "/createUnits",
        icon: <boxIcon.BiCoinStack />,
      },
      {
        title: "Units History",
        url: "/unitsHistory",
        icon: <boxIcon.BiHistory />,
      },
    ],
  },
  {
    id: 3,
    title: "Users",
    url: "/users",
    icon: <boxIcon.BiUser />,
  },
  {
    id: 4,
    title: "Money",
    url: "/money",
    icon: <boxIcon.BiMoneyWithdraw />,
  },
  {
    id: 5,
    title: "Games",
    url: "/games",
    icon: <boxIcon.BiGame />,
  },

  {
    id: 6,
    title: "Settings",
    url: "/setting",
    icon: <boxIcon.BiCog />,
  },
  {
    id: 7,
    title: "History",
    url: "/history",
    icon: <boxIcon.BiDetail />,
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
  title: "Total Balance",
  number: "2500000",
  dataKey: "balance",
  percentage: 45,
  chartData: [
    { name: "Sun", balance: 400 },
    { name: "Mon", balance: 600 },
    { name: "Tue", balance: 500 },
    { name: "Wed", balance: 700 },
    { name: "Thu", balance: 400 },
    { name: "Fri", balance: 500 },
    { name: "Sat", balance: 450 },
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
  title: "Withdrawals",
  number: "50000",
  dataKey: "withdrawal",
  percentage: 21,
  chartData: [
    { name: "Sun", withdrawal: 400 },
    { name: "Mon", withdrawal: 600 },
    { name: "Tue", withdrawal: 500 },
    { name: "Wed", withdrawal: 700 },
    { name: "Thu", withdrawal: 400 },
    { name: "Fri", withdrawal: 500 },
    { name: "Sat", withdrawal: 450 },
  ],
};

export const chartBoxConversion = {
  color: "teal",
  icon: <boxIcon.BiCalculator />,
  title: "Deposit",
  number: "300000",
  dataKey: "day",
  percentage: 21,
  chartData: [
    { name: "Sun", day: 400 },
    { name: "Mon", day: 600 },
    { name: "Tue", day: 500 },
    { name: "Wed", day: 700 },
    { name: "Thu", day: 400 },
    { name: "Fri", day: 500 },
    { name: "Sat", day: 450 },
  ],
};

// export const barChartBoxIncome = {
//   title: "Withdrawals",
//   color: "#8884d8",
//   dataKey: "withdrawal",
//   chartData: [
//     { name: "Sun", withdrawal: 5000 },
//     { name: "Mon", withdrawal: 7000 },
//     { name: "Tue", withdrawal: 6000 },
//     { name: "Wed", withdrawal: 5000 },
//     { name: "Thu", withdrawal: 4000 },
//     { name: "Fri", withdrawal: 3000 },
//     { name: "Sat", withdrawal: 4500 },
//   ],
// };

export const barChartBoxVisit = {
  title: "Weekly Visits",
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
