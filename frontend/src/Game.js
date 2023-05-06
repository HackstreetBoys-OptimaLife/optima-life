import { useState, useEffect } from 'react';
import './input.css';
import PlayGround from './Components/PlayGround';
import { useParams } from 'react-router-dom';

function Game() {
  const { id: healthCardId } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    async function fetchPatient() {
      const response = await fetch(`http://localhost:8080/api/v1/patients/${healthCardId}`);
      const { data } = await response.json();
      setPatient(data);
    }
    fetchPatient();
  }, [healthCardId]);

  return (
    <div className="h-screen bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-amber-100 via-amber-100 to-gray-500">
      <PlayGround patient={patient} />
    </div>
  );
}

export default Game;
