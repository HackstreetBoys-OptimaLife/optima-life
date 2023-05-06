import { useHistory } from 'react-router-dom';

function PatientSearch() {
  const history = useHistory();

  async function search(event) {
    event.preventDefault();
    const { target } = event;
    const healthCardId = target.healthCardId.value;
    if (!healthCardId) {
      alert("Please enter a health card ID");
      return;
    }
    const response = await fetch(`http://localhost:8080/api/v1/patients/${healthCardId}`);
    const { data } = await response.json();
    if(data) {
      history.push(`/home/patient-options/${healthCardId}`);
    }
    else
    {
      alert("Patient not found!");
    }
  }

  return (
    <div className="flex flex-col">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={search}>
        <Input label="Health Card ID" field="healthCardId" />
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Load
          </button>
        </div>
      </form>
    </div>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Input({ label, field, className = null }) {
  return (
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field}>
          {label}
        </label>
        <input className={classNames("shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", className)} id={field} name={field} type="text" />
      </div>);
}

export default PatientSearch;
