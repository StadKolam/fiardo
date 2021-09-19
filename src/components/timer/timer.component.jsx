// import React from 'react';
// import { useState, useEffect } from 'react';
// import './timer.styles.scss';
// import useDriveMeStore from '../../zustand/drive-me-crazy-store';
// const Timer = (props) => {
//   const { initialMinute = 0, initialSeconds = 0 } = props;
//   const [minutes, setMinutes] = useState(initialMinute);
//   const [seconds, setSeconds] = useState(initialSeconds);
//   const { setInValid } = useDriveMeStore();

//   useEffect(() => {
//     let myInterval = setInterval(() => {
//       if (seconds > 0) {
//         setSeconds(seconds - 1);
//       }
//       if (seconds === 0) {
//         if (minutes === 0) {
//           clearInterval(myInterval);
//           setInValid();
//         } else {
//           setMinutes(minutes - 1);
//           setSeconds(59);
//         }
//       }
//     }, 1000);
//     return () => {
//       clearInterval(myInterval);
//     };
//   });

//   return (
//     <>
//       {minutes === 0 && seconds === 0 ? null : (
//         <span className={`${seconds < 10 ? 'short' : ''} timer`}>
//           {' '}
//           {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
//         </span>
//       )}
//     </>
//   );
// };

// export default Timer;
