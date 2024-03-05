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

// Sidebar Data
export const SidebarData = [
  {
    icon: UilChart,
    heading: "Estadisticas Mensuales",
    Path: '/',
  },
  {
    icon: UilChart,
    heading: "Estadisticas Diarias",
    Path: '/estadisticas',
  },
//    {
//      icon: UilClipboardAlt,
//    heading: "Orders",
//    Path: '/estadisticas',
//  },
 {
   icon: UilUsersAlt,
   heading: "Evaluaciones",
   Path: '/',
 },
 {
   icon: UilPackage,
   heading: 'Ayuda',
   Path: '/estadisticas',
 }
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "TDC NTB",
    color: {
      backGround: "linear-gradient(25deg, #00847F, #70A7A6)", //Aquí se cambia el COLOR de fondo  #3498db , #2980b9
      boxShadow: "0px 10px 20px 0px #CAFCFB", //original
    },
    barValue: 93.4,
    value: "93%",
    png: UilClipboardAlt,
    //png: UilUsdSquare,
    series: [
      {
        name: "Meta",
        data: [98, 80, 95, 99, 89, 87, 98, 99, 89, 87, 98,88, 89, 95],
      },
      {
        name: "Avance",
        data: [92, 87, 90],
      }
    ],
  },
  {
    title: "TDC ETB",
    color: {
      backGround: "linear-gradient(25deg, #00847F, #70A7A6)", //Aquí se cambia el COLOR de fondo
      boxShadow: "0px 10px 20px 0px #CAFCFB",

    },
    barValue: 93.4,
    value: "93%",
    png: UilClipboardAlt,
    //png: UilUsdSquare,
    series: [
      {
        name: "Meta",
        data: [98, 80, 95, 99, 89, 87, 98, 99, 89, 87, 98,88, 89, 95],
      },
      {
        name: "Avance",
        data: [ 89, 75, 56],
      }
    ],
  },
  {
    title: "BT",
    color: {
      backGround: "linear-gradient(25deg, #FFBB33, #FFD480)",
      boxShadow: "0px 10px 20px 0px #FCEAC9",
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
        data: [98, 80, 95, 99, 89, 87, 98, 99, 89, 87, 98,88, 89, 95],
      },
      {
        name: "Avance",
        data: [92, 87, 40],
      },
    ],
  },
  {
    title: "L2",
    color: {
      backGround:
        "linear-gradient(25deg, #FFBB33, #FFD480)",
      boxShadow: "0px 10px 20px 0px #FCEAC9",
    },
    barValue: 93,
    value: "93%",
    png: UilClipboardAlt,
    series: [
      {
        name: "Meta",
        data: [98, 80, 95, 99, 89, 87, 98, 99, 89, 87, 98,88, 89, 95],
      },
      {
        name: "Avance",
        data: [92, 87, 40],
    },
    ],
  },
  {
    title: "Nómina",
    color: {
      backGround: "linear-gradient(25deg, #FFBB33, #FFD480)", //Aquí se cambia el COLOR de fondo
      boxShadow: "0px 10px 20px 0px #FCEAC9",
    },
    barValue: 93.4,
    value: "93%",
    png: UilClipboardAlt,
    //png: UilUsdSquare,
    series: [
      {
        name: "Meta",
        data: [98, 80, 95, 99, 89, 87, 98, 99, 89, 87, 98,88, 89, 95],
      },
      {
        name: "Avance",
        data: [92, 87, 40],
      }
    ],
  },
  {
    title: "Personales",
    color: {
      backGround: "linear-gradient(25deg, #FFBB33, #FFD480)", //Aquí se cambia el COLOR de fondo
      boxShadow: "0px 10px 20px 0px #FCEAC9",
    },
    barValue: 93.4,
    value: "93%",
    png: UilClipboardAlt,
    //png: UilUsdSquare,
    series: [
      {
        name: "Meta",
        data: [98, 80, 95, 99, 89, 87, 98, 99, 89, 87, 98,88, 89, 95],
      },
      {
        name: "Avance",
        data: [92, 87, 40],
      }
    ],
  },
  {
    title: "Seguros",
    color: {
      backGround: "linear-gradient(25deg, #305A85, #3E5E7D)", //Aquí se cambia el COLOR de fondo
      boxShadow: "0px 10px 20px 0px #CAE3FC",
    },
    barValue: 93.4,
    value: "93%",
    png: UilClipboardAlt,
    //png: UilUsdSquare,
    series: [
      {
        name: "Meta",
        data: [98, 80, 95, 99, 89, 87, 98, 99, 89, 87, 98,88, 89, 95],
      },
      {
        name: "Avance",
        data: [92, 87, 40],
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
        format: "yyyy-MM-dd HH:mm",
      },
    },
    grid: {
      show: true,
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2023-12-19T00:00:00.000Z",
        "2024-01-19T01:30:00.000Z",
        "2024-02-19T01:30:00.000Z",
        "2024-03-19T02:30:00.000Z",
        "2024-04-19T03:30:00.000Z",
        "2024-05-19T04:30:00.000Z",
        "2024-06-19T05:30:00.000Z",
        "2024-07-19T06:30:00.000Z",
        "2024-08-19T04:30:00.000Z",
        "2024-09-19T05:30:00.000Z",
        "2024-10-19T06:30:00.000Z",
        "2024-11-19T04:30:00.000Z",
        "2024-12-19T05:30:00.000Z",
        "2025-01-19T06:30:00.000Z",
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
