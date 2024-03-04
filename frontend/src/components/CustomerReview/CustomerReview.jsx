import React from "react";
import ReactApexChart from "react-apexcharts";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";


class ApexChart extends React.Component {
  render() {
    const { options, series } = this.props; // Recibe opciones y series como props

    return (
      <ReactApexChart options={options} series={series} type="line" height={350} />
    );
  }
}

class ChartTabs extends React.Component {
  render() {
    // Define los datos y opciones de gráficos para cada pestaña
    const tabs = [
      {
        label: "Agencia",
        series: [{
          name: 'Lead', // Nombre de la serie
          type: 'column', // Tipo de gráfico (columna)
          data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6], // Datos de la serie
          color: '#ED6335'

        }, {
          name: 'Meta', // Nombre de la serie
          type: 'column', // Tipo de gráfico (columna)
          data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5], // Datos de la serie
          color: '#739F56'
        }, {
          name: 'Avance', // Nombre de la serie
          type: 'line', // Tipo de gráfico (línea)
          data: [1000000, 956787, 1000000, 800000, 600000, 900000, 750000, 1350000],// Datos de la serie
          color: '#2D6980'
        }],
        options: {
          chart: {
            height: 350, // Altura del gráfico
            type: 'line', // Tipo de gráfico (línea)
            stacked: false // No apilado
          },
          dataLabels: {
            enabled: false // Etiquetas de datos desactivadas
          },
          stroke: {
            width: [1, 1, 4] // Ancho de las líneas
          },
          title: {
            text: 'Grafica aculado por Agencia', // Título del gráfico
            align: 'left', // Alineación del título
            offsetX: 110 // Desplazamiento horizontal del título
          },
          xaxis: {
            categories: ['JUL 23', 'AGO 23', 'SEP 23', 'OCT 23', 'NOV 23', 'DIC 23', 'ENE 24', 'FEB 24'], // Categorías del eje X
          },
          yaxis: [
            {
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#ED6335'
              },
              labels: {
                style: {
                  colors: '#ED6335',
                }
              },
              title: {
                text: "Ingresos (miles de millones)", // Título del eje Y
                style: {
                  color: '#ED6335',
                }
              },
              tooltip: {
                enabled: true
              }
            },
            {
              seriesName: 'Lead',
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#739F56'
              },
              labels: {
                style: {
                  colors: '#739F56',
                }
              },
              title: {
                text: "Flujo de Efectivo Operativo (miles de millones)", // Título del eje Y
                style: {
                  color: '#739F56',
                }
              },
            },
            {
              seriesName: 'Avance',
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#2D6980'
              },
              labels: {
                style: {
                  colors: '#2D6980',
                },
              },
              title: {
                text: "Ingresos (miles de millones)", // Título del eje Y
                style: {
                  color: '#2D6980',
                }
              }
            },
          ],
          tooltip: {
            fixed: {
              enabled: true,
              position: 'topLeft', // Posición del tooltip
              offsetY: 30, // Desplazamiento vertical del tooltip
              offsetX: 60 // Desplazamiento horizontal del tooltip
            },
          },
          legend: {
            horizontalAlign: 'left', // Alineación horizontal de la leyenda
            offsetX: 40 // Desplazamiento horizontal de la leyenda
          }
        }
      },
      {
        label: "Producto",
        series: [{
          name: 'Lead', // Nombre de la serie
          type: 'column', // Tipo de gráfico (columna)
          data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6], // Datos de la serie
          color: '#ED6335'

        }, {
          name: 'Meta', // Nombre de la serie
          type: 'column', // Tipo de gráfico (columna)
          data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5], // Datos de la serie
          color: '#739F56'
        }, {
          name: 'Avance', // Nombre de la serie
          type: 'line', // Tipo de gráfico (línea)
          data: [1000000, 956787, 1000000, 800000, 600000, 900000, 750000, 1350000],// Datos de la serie
          color: '#2D6980'
        }],
        options: {
          chart: {
            height: 350, // Altura del gráfico
            type: 'line', // Tipo de gráfico (línea)
            stacked: false // No apilado
          },
          dataLabels: {
            enabled: false // Etiquetas de datos desactivadas
          },
          stroke: {
            width: [1, 1, 4] // Ancho de las líneas
          },
          title: {
            text: 'Grafica Concentrado por Producto', // Título del gráfico
            align: 'left', // Alineación del título
            offsetX: 110 // Desplazamiento horizontal del título
          },
          xaxis: {
            categories: ['JUL 23', 'AGO 23', 'SEP 23', 'OCT 23', 'NOV 23', 'DIC 23', 'ENE 24', 'FEB 24'], // Categorías del eje X
          },
          yaxis: [
            {
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#ED6335'
              },
              labels: {
                style: {
                  colors: '#ED6335',
                }
              },
              title: {
                text: "Ingresos (miles de millones)", // Título del eje Y
                style: {
                  color: '#ED6335',
                }
              },
              tooltip: {
                enabled: true
              }
            },
            {
              seriesName: 'Lead',
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#739F56'
              },
              labels: {
                style: {
                  colors: '#739F56',
                }
              },
              title: {
                text: "Flujo de Efectivo Operativo (miles de millones)", // Título del eje Y
                style: {
                  color: '#739F56',
                }
              },
            },
            {
              seriesName: 'Avance',
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#2D6980'
              },
              labels: {
                style: {
                  colors: '#2D6980',
                },
              },
              title: {
                text: "Ingresos (miles de millones)", // Título del eje Y
                style: {
                  color: '#2D6980',
                }
              }
            },
          ],
          tooltip: {
            fixed: {
              enabled: true,
              position: 'topLeft', // Posición del tooltip
              offsetY: 30, // Desplazamiento vertical del tooltip
              offsetX: 60 // Desplazamiento horizontal del tooltip
            },
          },
          legend: {
            horizontalAlign: 'left', // Alineación horizontal de la leyenda
            offsetX: 40 // Desplazamiento horizontal de la leyenda
          }
        }
      },
      {
        label: "Gerente",
        series: [{
          name: 'Lead', // Nombre de la serie
          type: 'column', // Tipo de gráfico (columna)
          data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6], // Datos de la serie
          color: '#ED6335'

        }, {
          name: 'Meta', // Nombre de la serie
          type: 'column', // Tipo de gráfico (columna)
          data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5], // Datos de la serie
          color: '#739F56'
        }, {
          name: 'Avance', // Nombre de la serie
          type: 'line', // Tipo de gráfico (línea)
          data: [1000000, 956787, 1000000, 800000, 600000, 900000, 750000, 1350000],// Datos de la serie
          color: '#2D6980'
        }],
        options: {
          chart: {
            height: 350, // Altura del gráfico
            type: 'line', // Tipo de gráfico (línea)
            stacked: false // No apilado
          },
          dataLabels: {
            enabled: false // Etiquetas de datos desactivadas
          },
          stroke: {
            width: [1, 1, 4] // Ancho de las líneas
          },
          title: {
            text: 'XYZ - Análisis de Stock (2009 - 2016)', // Título del gráfico
            align: 'left', // Alineación del título
            offsetX: 110 // Desplazamiento horizontal del título
          },
          xaxis: {
            categories: ['JUL 23', 'AGO 23', 'SEP 23', 'OCT 23', 'NOV 23', 'DIC 23', 'ENE 24', 'FEB 24'], // Categorías del eje X
          },
          yaxis: [
            {
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#ED6335'
              },
              labels: {
                style: {
                  colors: '#ED6335',
                }
              },
              title: {
                text: "Ingresos (miles de millones)", // Título del eje Y
                style: {
                  color: '#ED6335',
                }
              },
              tooltip: {
                enabled: true
              }
            },
            {
              seriesName: 'Lead',
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#739F56'
              },
              labels: {
                style: {
                  colors: '#739F56',
                }
              },
              title: {
                text: "Flujo de Efectivo Operativo (miles de millones)", // Título del eje Y
                style: {
                  color: '#739F56',
                }
              },
            },
            {
              seriesName: 'Avance',
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#2D6980'
              },
              labels: {
                style: {
                  colors: '#2D6980',
                },
              },
              title: {
                text: "Ingresos (miles de millones)", // Título del eje Y
                style: {
                  color: '#2D6980',
                }
              }
            },
          ],
          tooltip: {
            fixed: {
              enabled: true,
              position: 'topLeft', // Posición del tooltip
              offsetY: 30, // Desplazamiento vertical del tooltip
              offsetX: 60 // Desplazamiento horizontal del tooltip
            },
          },
          legend: {
            horizontalAlign: 'left', // Alineación horizontal de la leyenda
            offsetX: 40 // Desplazamiento horizontal de la leyenda
          }
        }
      }
    ];

    return (
      <div className="flex w-full flex-col">


      <Tabs aria-label="Dynamic tabs">
        {tabs.map((tab, index) => (
          <Tab key={index} title={tab.label}>
            <Card>
              <CardBody>
               <ApexChart options={tab.options} series={tab.series} />
              </CardBody>
            </Card>  
          </Tab>
        ))}
      </Tabs>
        </div>
    );
  }
}

export default ChartTabs;
