// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
//import img1 from "../imgs/img1.png";
import robot from "../imgs/robot.svg";

// Analytics Cards Data
export const cardsData = [
  {
    title: "TDC NTB",
    color: {
      backGround: "linear-gradient(25deg, #5D9438, #BFFF94)", //Aquí se cambia el COLOR de fondo  #3498db , #2980b9
      boxShadow: "0px 10px 20px 0px #DCFFC0", //original
    },
    barValue: 93.4,
    value: "93%",
    png: UilClipboardAlt,
    //png: UilUsdSquare,
    series: [
      {
        name: "Meta",
        data: [78, 80, 28, 51, 80, 67, 98],
      },
      {
        name: "Avance",
        data: [92, 87, 40, 89, 75, 56, 78],
      }
    ],
  },
  {
    title: "TDC ETB",
    color: {
      backGround: "linear-gradient(25deg, #5D9438, #BFFF94)", //Aquí se cambia el COLOR de fondo
      boxShadow: "0px 10px 20px 0px #DCFFC0",

    },
    barValue: 93.4,
    value: "93%",
    png: UilClipboardAlt,
    //png: UilUsdSquare,
    series: [
      {
        name: "Meta",
        data: [78, 80, 28, 51, 80, 67, 98],
      },
      {
        name: "Avance",
        data: [92, 87, 40, 89, 75, 56, 78],
      }
    ],
  },
  {
    title: "BT",
    color: {
      backGround: "linear-gradient(25deg, #E76E84, #EBA0AD)",
      boxShadow: "0px 10px 20px 0px #FFE0E6",
    },
    //Aquí se cambia el valor de la ruedita de la gráfica
    barValue: 87.2,
    //Aquí se cambia el valor que aparece en cada carta :3 
    value: "87%",
    png: UilClipboardAlt,
    //png: UilMoneyWithdrawal,
    series: [
      {
        name: "Meta",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
      {
        name: "Avance",
        data: [92, 87, 40, 89, 75, 56, 78],
      },
    ],
  },
  {
    title: "L2",
    color: {
      backGround:
        "linear-gradient(25deg, #E76E84, #EBA0AD)",
      boxShadow: "0px 10px 20px 0px #FFE0E6",
    },
    barValue: 93,
    value: "93%",
    png: UilClipboardAlt,
    series: [
      {
        name: "Meta",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
      {
        name: "Avance",
        data: [92, 87, 40, 89, 75, 56, 78],
    },
    ],
  },
  {
    title: "Nómina",
    color: {
      backGround: "linear-gradient(25deg, #E76E84, #EBA0AD)", //Aquí se cambia el COLOR de fondo
      boxShadow: "0px 10px 20px 0px #FFE0E6",
    },
    barValue: 93.4,
    value: "93%",
    png: UilClipboardAlt,
    //png: UilUsdSquare,
    series: [
      {
        name: "Meta",
        data: [78, 80, 28, 51, 80, 67, 98],
      },
      {
        name: "Avance",
        data: [92, 87, 40, 89, 75, 56, 78],
      }
    ],
  },
  {
    title: "Personales",
    color: {
      backGround: "linear-gradient(25deg, #E76E84, #EBA0AD)", //Aquí se cambia el COLOR de fondo
      boxShadow: "0px 10px 20px 0px #FFE0E6",
    },
    barValue: 93.4,
    value: "93%",
    png: UilClipboardAlt,
    //png: UilUsdSquare,
    series: [
      {
        name: "Meta",
        data: [78, 80, 28, 51, 80, 67, 98],
      },
      {
        name: "Avance",
        data: [92, 87, 40, 89, 75, 56, 78],
      }
    ],
  },
  {
    title: "Seguros",
    color: {
      backGround: "linear-gradient(25deg, #469CBE, #7EC3DE)", //Aquí se cambia el COLOR de fondo
      boxShadow: "0px 10px 20px 0px #CEF0FE",
    },
    barValue: 93.4,
    value: "93%",
    png: UilClipboardAlt,
    //png: UilUsdSquare,
    series: [
      {
        name: "Meta",
        data: [78, 80, 28, 51, 80, 67, 98],
      },
      {
        name: "Avance",
        data: [92, 87, 40, 89, 75, 56, 78],
      }
    ],
  
  }
];

export const datax = {
  options: {
    chart: {
      type: "area",
      height: "auto",
    },

    dropShadow: {
      enabled: false,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "#000",
      opacity: 0.35,
    },

    fill: {
      colors: ["#fff"],
      type: "gradient",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["white"],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: true,
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
  },

};
//AQUI PONEMOS EL MENSAJE DEL ROBOT :3 
export const UpdatesData = [
  {
    img: robot,
    mensaje: "Si tienes alguna duda o sugerencia sobre éste Dashboard, escribenos y el equipo de Robotics te ayudará.",
  },
  
];
// Recent Update Card Data
/*export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
*/

/*
export const UpdatesData = [
  {
    img: robot,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  
];
*/
