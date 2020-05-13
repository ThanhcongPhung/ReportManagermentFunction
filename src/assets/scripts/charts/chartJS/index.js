import Chart from 'chart.js';
import { COLORS } from '../../constants/colors';

export default (function () {
  // ------------------------------------------------------
  // @Line Charts
  // ------------------------------------------------------

  const lineChartBox = document.getElementById('line-chart');

  if (lineChartBox) {
    const lineCtx = lineChartBox.getContext('2d');
    lineChartBox.height = 80;

    new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
        datasets: [{
          label                : 'Thiết bị A',
          backgroundColor      : 'rgba(237, 231, 246, 0.5)',
          borderColor          : COLORS['deep-purple-500'],
          pointBackgroundColor : COLORS['deep-purple-700'],
          borderWidth          : 2,
          data                 : [60, 50, 70, 60, 50, 70, 60, 60, 50, 70, 60, 50, 70],
        }, {
          label                : 'Thiết bị B',
          backgroundColor      : 'rgba(232, 245, 233, 0.5)',
          borderColor          : COLORS['blue-500'],
          pointBackgroundColor : COLORS['blue-700'],
          borderWidth          : 2,
          data                 : [65, 55, 72, 61, 47, 66, 56, 63, 57, 74, 61, 53, 72],
        }, {
          label                : 'Thiết bị C',
          backgroundColor      : 'rgba(255, 255, 255, 0.5)',
          borderColor          : COLORS['red-500'],
          pointBackgroundColor : COLORS['red-700'],
          borderWidth          : 2,
          data                 : [68, 62, 73, 69, 63, 66, 66, 69, 67, 76, 71, 63, 75],
        }],
      }, 

      options: {
        legend: {
          display: false,
        },
      },

    });
  }

  // ------------------------------------------------------
  // @Bar Charts
  // ------------------------------------------------------

  const barChartBox = document.getElementById('bar-chart');

  if (barChartBox) {
    const barCtx = barChartBox.getContext('2d');

    new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5'],
        datasets: [{
          label           : 'Cột điện',
          backgroundColor : COLORS['deep-purple-500'],
          borderColor     : COLORS['deep-purple-800'],
          borderWidth     : 1,
          data            : [2, 1, 3, 1, 0],
        }, {
          label           : 'Dây điện',
          backgroundColor : COLORS['light-blue-500'],
          borderColor     : COLORS['light-blue-800'],
          borderWidth     : 1,
          data            : [3, 4, 5, 3, 2],
        },{
          label           : 'Trạm biến áp',
          backgroundColor : COLORS['green-500'],
          borderColor     : COLORS['green-800'],
          borderWidth     : 1,
          data            : [1,2,1,1,0],
        },{
          label           : 'Bóng điện',
          backgroundColor : COLORS['yellow-500'],
          borderColor     : COLORS['yellow-800'],
          borderWidth     : 1,
          data            : [6,7,7,8,4],
        }],
      },

      options: {
        responsive: true,
        legend: {
          position: 'bottom',
        },
      },
    });
  }

  // ------------------------------------------------------
  // @Area Charts
  // ------------------------------------------------------

  const areaChartBox = document.getElementById('area-chart');

  if (areaChartBox) {
    const areaCtx = areaChartBox.getContext('2d');

    new Chart(areaCtx, {
      type: 'line',
      data: {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5'],
        datasets: [{
          backgroundColor : 'rgba(3, 169, 244, 0.5)',
          borderColor     : COLORS['light-blue-800'],
          data            : [10, 13, 9, 15, 4],
          label           : 'Số cảnh baó',
          fill            : 'start',
        }],
      },
    });
  }

}())
