// import AuthContext from '../../store/AuthContext';
// let a = ['현금', '금', '다이아몬드', '주식', '명칭', '명칭'];
// let b = [100000000, 20000000, 70000000, 326000000];
// eslint-disable-next-line no-unused-vars

export const AssetAdata = {
  labels: [],

  datasets: [
    {
      data: [],
      backgroundColor: [
        'rgba(255, 159, 64, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 99, 132, 0.8)',
      ],
      borderRadius: 5,
      cutout: '50%',
      radius: '90%',
    },
  ],
  hoverOffset: 5,
};

export const mobilePieOptions = {
  plugins: {
    legend: {
      display: true,
      labels: {
        align: 'top',
        boxWidth: 15,
        boxHeight: 15,
        font: {
          size: 15,
        },
        color: 'rgba(255, 255, 255)',
      },
      animation: {
        duration: 0,
      },
    },
  },
};

// export const mobilePieOptions = {
//   plugins: {
//     legend: {
//       display: true,

//       labels: {
//         align: 'top',

//         // boxWidth: 20,
//         // boxHeight: 20,
//         font: {
//           // size: 10,
//           weight: 'bold',
//           color: 'rgba(68, 68, 68, 100)',
//         },
//       },
//       animation: {
//         duration: 0,
//       },
//     },
//   },
// };

// // options: [
// //   {
// //     responsive: false,
// //     legend: { position: 'top' },
// //     title: [{ display: true, text: 'testtesttesttest' }],
// //     animation: [
// //       {
// //         animateScale: true,
// //         animateRotate: true,
// //       },
// //     ],
// //   },
// // ],
