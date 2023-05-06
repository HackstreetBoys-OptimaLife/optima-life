import { useParams, useHistory } from 'react-router-dom';

function UpdateHealth() {
  const { id: healthCardId } = useParams();

  const history = useHistory();

  const fieldNames = {
    'pregnancies': 'Pregnancies',
    'glucose': 'Glucose',
    'bloodPressure': 'Blood Pressure',
    'skinThickness': 'Skin Thickness',
    'insulin': 'Insulin',
    'bmi': 'BMI',
    'diabetesPedigreeFunction': 'Diabetes Pedigree Function',
    'age': 'Age',
    'outcome': 'Outcome'
  };

  async function registerPatient(event) {
    event.preventDefault();
    const { target } = event;
    const data = { healthCardId: healthCardId };
    Object.keys(fieldNames).forEach(field => {
      if(target[field].value !== "") {
        data[field] = target[field].value;
      }
    });
    const result = await postData('http://localhost:8080/api/v1/patients', data);
    const message = result.success ? "Patient registered successfully" : result.message;
    alert(message);
    if(result.success) {
      history.push(`/home/patient-options/${healthCardId}`);
    }
  }

  async function postData(url = '', data = {}) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const responseData = await response.json();
      return responseData;
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={registerPatient}>
      { Object.keys(fieldNames).map(field => (<Input key={field} label={fieldNames[field]} field={field} />)) }
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Register
        </button>
      </div>
    </form>
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

export default UpdateHealth;
