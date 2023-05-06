import { useState, useEffect } from 'react';
import './input.css';
import HomeScreen from './HomeScreen';
import FinalScreen from './FinalScreen';
import PlayGround from './Components/PlayGround';

function Game() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8080/api/v1/records');
        const { data } = await response.json();
        setContacts(data);
        console.log(data);
      } catch (error) {
        console.log('Error fetching data: ', error);
      }
    }
    fetchData();

    return () => console.log("unmounting...");
  }, []);

  return (
    <div className="h-screen bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-amber-100 via-amber-100 to-gray-500">
      {/* { contacts.map(contact => <div className="font-bold p-4" key={contact.id}>{contact.name}</div>) } */}
      <PlayGround />
    </div>
  );
}

export default Game;
