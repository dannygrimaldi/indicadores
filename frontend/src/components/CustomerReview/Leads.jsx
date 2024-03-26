import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./CustomerReview.css";

function Leads() {
  return (
    <div className="flex w-full flex-col">
      <BasicTabs />
    </div>
  );
}

function BasicTabs() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  const tabs = [
    {
      label: "TDC ETB",
      series: [
        {
          name: 'Frescura 0',
          type: 'bar',
          data: [44, 55, 41, 67, 22, 43, 50, 60]
        },
        {
          name: 'Frescura 1',
          type: 'bar',
          data: [13, 23, 20, 8, 13, 27,12 ,4]
        },
        {
          name: 'Frescura 2',
          type: 'bar',
          data: [11, 17, 15, 15, 21, 14,3,2]
        },
        {
          name: 'Frescura 3',
          type: 'bar',
          data: [21, 7, 25, 13, 22, 8,20,15]
        }
      ],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10,
            dataLabels: {
              total: {
                enabled: true,
                style: {
                  fontSize: '13px',
                  fontWeight: 900
                }
              }
            }
          },
        },
        title: {
          text: 'Frescuras', // Título del gráfico
          align: 'left', // Alineación del título
          offsetX: 110 // Desplazamiento horizontal del título
        },
        xaxis: {
          categories: [ 'AGO 23', 'SEP 23', 'OCT 23', 'NOV 23', 'DIC 23', 'ENE 24', 'FEB 24', 'MAR 24']
        },
        legend: {
          position: 'right',
          offsetY: 40
        },
        fill: {
          opacity: 1
        }
      }
    },
    {
      label: "BT",
      series: [
        {
          name: 'Frescura 0',
          type: 'bar',
          data: [60, 50, 45, 70, 35, 55, 40, 30]
        },
        {
          name: 'Frescura 1',
          type: 'bar',
          data: [10, 30, 25, 15, 20, 25, 35, 40]
        },
        {
          name: 'Frescura 2',
          type: 'bar',
          data: [25, 20, 30, 40, 45, 35, 50, 60]
        },
        {
          name: 'Frescura 3',
          type: 'bar',
          data: [50, 45, 55, 60, 70, 65, 75, 80]
        }
      ],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10,
            dataLabels: {
              total: {
                enabled: true,
                style: {
                  fontSize: '13px',
                  fontWeight: 900
                }
              }
            }
          },
        },
        title: {
          text: 'Frescuras', // Título del gráfico
          align: 'left', // Alineación del título
          offsetX: 110 // Desplazamiento horizontal del título
        },
        xaxis: {
          categories: ['AGO 23', 'SEP 23', 'OCT 23', 'NOV 23', 'DIC 23', 'ENE 24', 'FEB 24', 'MAR 24']
        },
        legend: {
          position: 'right',
          offsetY: 40
        },
        fill: {
          opacity: 1
        }
      }
    },
    {
      label: "L2",
      series: [
        {
          name: 'Frescura 0',
          type: 'bar',
          data: [44, 55, 41, 67, 22, 43,12,16]
        },
        {
          name: 'Frescura 1',
          type: 'bar',
          data: [13, 23, 20, 8, 13, 27,23,24]
        },
        {
          name: 'Frescura 2',
          type: 'bar',
          data: [11, 17, 15, 15, 21, 14,25,11]
        },
        {
          name: 'Frescura 3',
          type: 'bar',
          data: [21, 7, 25, 13, 22, 8,15,4]
        }
      ],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10,
            dataLabels: {
              total: {
                enabled: true,
                style: {
                  fontSize: '13px',
                  fontWeight: 900
                }
              }
            }
          },
        },
        title: {
          text: 'Frescuras', // Título del gráfico
          align: 'left', // Alineación del título
          offsetX: 110 // Desplazamiento horizontal del título
        },
        xaxis: {
          categories: ['AGO 23', 'SEP 23', 'OCT 23', 'NOV 23', 'DIC 23', 'ENE 24', 'FEB 24', 'MAR 24']
        },
        legend: {
          position: 'right',
          offsetY: 40
        },
        fill: {
          opacity: 1
        }
      }
    },
    {
      label: "Nómina",
      series: [
        {
          name: 'Frescura 0',
          type: 'bar',
          data: [44, 55, 41, 67, 22, 43,12,16]
        },
        {
          name: 'Frescura 1',
          type: 'bar',
          data: [13, 23, 20, 8, 13, 27,23,24]
        },
        {
          name: 'Frescura 2',
          type: 'bar',
          data: [11, 17, 15, 15, 21, 14,25,11]
        },
        {
          name: 'Frescura 3',
          type: 'bar',
          data: [21, 7, 25, 13, 22, 8,15,4]
        }
      ],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10,
            dataLabels: {
              total: {
                enabled: true,
                style: {
                  fontSize: '13px',
                  fontWeight: 900
                }
              }
            }
          },
        },
        title: {
          text: 'Frescuras', // Título del gráfico
          align: 'left', // Alineación del título
          offsetX: 110 // Desplazamiento horizontal del título
        },
        xaxis: {
          categories: ['AGO 23', 'SEP 23', 'OCT 23', 'NOV 23', 'DIC 23', 'ENE 24', 'FEB 24', 'MAR 24']
        },
        legend: {
          position: 'right',
          offsetY: 40
        },
        fill: {
          opacity: 1
        }
      }
    },
    {
      label: "Personales",
      series: [
        {
          name: 'Frescura 0',
          type: 'bar',
          data: [2,12,44, 55, 41, 67, 22, 43]
        },
        {
          name: 'Frescura 1',
          type: 'bar',
          data: [4,15,13, 23, 20, 8, 13, 27]
        },
        {
          name: 'Frescura 2',
          type: 'bar',
          data: [23, 20,11, 17, 15, 15, 21, 14]
        },
        {
          name: 'Frescura 3',
          type: 'bar',
          data: [23, 20, 21, 7, 25, 13, 22, 8]
        }
      ],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10,
            dataLabels: {
              total: {
                enabled: true,
                style: {
                  fontSize: '13px',
                  fontWeight: 900
                }
              }
            }
          },
        },
        title: {
          text: 'Frescuras', // Título del gráfico
          align: 'left', // Alineación del título
          offsetX: 110 // Desplazamiento horizontal del título
        },
        xaxis: {
          categories: ['AGO 23', 'SEP 23', 'OCT 23', 'NOV 23', 'DIC 23', 'ENE 24', 'FEB 24', 'MAR 24']
        },
        legend: {
          position: 'right',
          offsetY: 40
        },
        fill: {
          opacity: 1
        }
      }
    },
    {
      label: "Seguros",
      series: [
        {
          name: 'Frescura 0',
          type: 'bar',
          data: [44, 55, 41, 67,17, 15, 22, 43]
        },
        {
          name: 'Frescura 1',
          type: 'bar',
          data: [13, 23, 20,55, 41, 8, 13, 27 ]
        },
        {
          name: 'Frescura 2',
          type: 'bar',
          data: [11, 17, 15, 7, 25, 15, 21, 14]
        },
        {
          name: 'Frescura 3',
          type: 'bar',
          data: [21, 7, 25, 13, 8, 13, 22, 8]
        }
        
      ],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10,
            dataLabels: {
              total: {
                enabled: true,
                style: {
                  fontSize: '13px',
                  fontWeight: 900
                }
              }
            }
          },
        },
        title: {
          text: 'Frescuras', // Título del gráfico
          align: 'left', // Alineación del título
          offsetX: 110 // Desplazamiento horizontal del título
        },
        xaxis: {
          categories: ['AGO 23', 'SEP 23', 'OCT 23', 'NOV 23', 'DIC 23', 'ENE 24', 'FEB 24', 'MAR 24']
        },
        legend: {
          position: 'right',
          offsetY: 40
        },
        fill: {
          opacity: 1
        }
      }
    }
  ];

  return (
    <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
      <TabList>
        {tabs.map((tab, index) => (
          <Tab key={index}>{tab.label}</Tab>
        ))}
      </TabList>
      {tabs.map((tab, index) => (
        <TabPanel key={index}>
          <ReactApexChart options={tab.options} series={tab.series} type="bar" height={350} />
        </TabPanel>
      ))}
    </Tabs>
  );
}

export default Leads;
