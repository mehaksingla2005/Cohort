import React from 'react'
import { useState } from 'react';

const Hook = () => {
    //Basic Usage with a Primitive Value
    // const [count, setCount] = useState(0);  // number
    // const [isOpen, setIsOpen] = useState(false);  // boolean
    // const [name, setName] = useState('John');  // string


    //Using with an Object as State
    const [user, setUser] = useState({
        name: 'John',
        age: 30,
        location: 'NYC'
      });
      
      // Updating only one property
      const updateAge = () => {
        setUser(prevUser => ({ ...prevUser, age: prevUser.age + 1 }));
      };





      //Using with an Array as State
      const [items, setItems] = useState([]);

      const addItem = newItem => {
       setItems(prevItems => [...prevItems, newItem]);
       };


       //Updating State Based on Previous State
       const [count, setCount] = useState(0);

        const increment = () => {
        setCount(prevCount => prevCount + 1);
        };



        //Lazy Initialization of State
        const calculateInitialValue = () => {
            console.log('Calculating...');
            return 10;
          };
          
          const [counttt, setCounttt] = useState(calculateInitialValue);

          
          //Multiple useState Calls in the Same Component
          const [name, setName] = useState('');
          const [age, setAge] = useState(0);
          const [email, setEmail] = useState('');


          //Using Callback Functions to Update State
          const [cnt, setCnt] = useState(0);

         const incrementByFive = () => {
            setCount(prevCount => prevCount + 5);
        };


        //Toggling State Values
        const [isVisible, setIsVisible] = useState(false);

        const toggleVisibility = () => {
        setIsVisible(prev => !prev);
        };


        //Using useState with Derived State
        const [countt, setCountt] = useState(0);
        const [doubleCount, setDoubleCount] = useState(countt * 2);

        useEffect(() => {
        setDoubleCount(countt * 2);
        }, [countt]);




  return (
    <div>
      
    </div>
  )
}

export default Hook
