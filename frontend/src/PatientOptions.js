import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Indicators from './PatientIndicators';

function PatientOptions() {
  const { id: healthCardId } = useParams();
  const [patient, setPatient] = useState(null);

  const fullname = patient ? `${patient.firstName} ${patient.lastName}` : 'Name not defined yet';

  useEffect(() => {
    async function fetchPatient() {
      const response = await fetch(`http://localhost:8080/api/v1/patients/${healthCardId}`);
      const { data } = await response.json();
      setPatient(data);
    }
    fetchPatient();
  }, [healthCardId]);

  return (
    <div className="flex flex-col space-y-4">
      <p className="text-2xl">{fullname}</p>
      <Indicators />
      <ul>
        <li><Link label= "Update health" url={`/home/update-health/${healthCardId}`} /></li>
        <li><Link label= "Generate token" url={`/home/generate-token/${healthCardId}`} /></li>
        <li><Link label= "Make an appointment" url="#" /></li>
      </ul>
    </div>
  );
}

function Link({ label, url }) {
  const history = useHistory();
  return <a className="text-blue-600 underline cursor-pointer" onClick={() => history.push(url)}>{label}</a>;
}

export default PatientOptions;
