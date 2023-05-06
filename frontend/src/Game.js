import { useState, useEffect } from 'react';
import './input.css';
import HomeScreen from './HomeScreen';
import FinalScreen from './FinalScreen';

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
    <div>
      {/* { contacts.map(contact => <div className="font-bold p-4" key={contact.id}>{contact.name}</div>) } */}
      <FinalScreen />
    </div>
  );
}

export default Game;
