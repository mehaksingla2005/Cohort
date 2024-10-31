//trying to learn useEffect hook

import React, { useState, useEffect } from 'react';

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [showTimer, setShowTimer] = useState(true);


  //Here, useEffect runs after each render (both initial and re-renders), logging a message to the console.
//   useEffect(() => {
//     console.log('Component rendered or updated');
//   });

//With [count] as the dependency, this effect runs only when count changes, not on every render.
//   useEffect(() => {
//     console.log('Count changed:', count);
//   }, [count]);  // Runs only when 'count' changes


//Running an Effect Only Once (on Mount)
// To run useEffect only once when the component mounts, use an empty dependency array [].
// This is useful for actions like fetching data or setting up subscriptions.

// useEffect(() => {
//     console.log('Component mounted');
//     // Fetch data or set up a subscription
//   }, []);  // Empty array ensures it runs only on mount



//4. Cleaning Up Effects (Using Cleanup Functions)
// Sometimes, effects need cleanup to avoid memory leaks or unwanted behavior.
// Return a function inside useEffect to clean up when the component unmounts or before it re-runs.
// useEffect(() => {
//     console.log('Effect with cleanup');
//     const timer = setInterval(() => {
//       console.log('Interval running');
//     }, 1000);
  
//     return () => {
//       clearInterval(timer);  // Clean up the interval on unmount
//       console.log('Cleanup done');
//     };
//   }, []);  // Empty array, so it runs only on mount/unmount




// To understand Unmounting

// const TimerComponent = () => {
//     useEffect(() => {
//       console.log('Effect with cleanup');
//       const timer = setInterval(() => {
//         console.log('Interval running');
//       }, 1000);
  
//       return () => {
//         clearInterval(timer);
//         console.log('Cleanup done');
//       };
//     }, []);
  
//     return <div>Timer is running</div>;
//   };
  


// Multiple useEffect Hooks
// You can use multiple useEffect hooks in the same component to handle different effects independently.
// useEffect(() => {
//     console.log('Effect for count');
//   }, [count]);
  
//   useEffect(() => {
//     console.log('Effect for data fetching');
//   }, []);





// Using useEffect for Data Fetching
// Data fetching is a common use case for useEffect, where you want to load data when a component mounts or when a specific variable changes.


  
  return (
    
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      {/* <div>
      <button onClick={() => setShowTimer(prev => !prev)}>
        Toggle Timer Component
      </button>
      {showTimer && <TimerComponent />}
    </div> */}
    </div>
  );
};

export default Hooks
