import React from "react";
import Chart from "react-apexcharts";

// Función para generar series de datos diarios
const generateDayWiseTimeSeries = (baseDate, count, yrange) => {
  let i = 0;
  let series = [];
  while (i < count) {
    const x = baseDate;
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseDate += 86400000; // 1 día en milisegundos
    i++;
  }
  return series;
};

// Configuración de datos para el gráfico
const CustomerReview = {
  series: [
    {
      name: 'Sur',
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: 'Norte',
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 20,
      }),
    },
    {
      name: 'Central',
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 15,
      }),
    },
  ],
  chart: {
    type: 'area',
    height: 350,
    stacked: true,
    events: {
      selection: function (chart, e) {
        console.log(new Date(e.xaxis.min));
      },
    },
  },
  colors: ['#008FFB', '#00E396', '#CED4DC'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.6,
      opacityTo: 0.8,
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
  },
  xaxis: {
    type: 'datetime',
  },
};

// Componente funcional para el gráfico
const ChartComponent = () => {
  return (
    <div id="chart">
      <Chart options={CustomerReview} series={CustomerReview.series} type="area" height={350} />
    </div>
  );
};

export default ChartComponent;
