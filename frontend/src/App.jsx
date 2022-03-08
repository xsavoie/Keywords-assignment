import AppointmentForm from './components/AppointmentForm';
import ConfirmAppointment from './components/ConfirmAppointment';
import { useFormState } from './lib/formState';

function App() {
  const { mode } = useFormState();

  return (
    <div className="App">
      {mode === 'FORM' && <AppointmentForm />}
      {mode === 'CONFIRM' && <ConfirmAppointment />}
    </div>
  );
}

export default App;
