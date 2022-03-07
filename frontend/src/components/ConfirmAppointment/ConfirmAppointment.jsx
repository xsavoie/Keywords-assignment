import { useFormState } from '../../lib/formState';
import './ConfirmAppointment.css';

export default function ConfirmAppointment() {
  const { confirmMessage, handleModeChange } = useFormState();
  return (
    <div className="confirm-container">
      <p className="confirm-message">{confirmMessage}</p>
      <button className="confirm-button" onClick={handleModeChange}>
        Book Another Appointment
      </button>
    </div>
  );
}
