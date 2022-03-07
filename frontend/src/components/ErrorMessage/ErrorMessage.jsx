import './ErrorMessage.css';

export default function ErrorMessage({ error }) {
  return (
    <div className="error-div">
      <p className="error-message">{error}</p>
    </div>
  );
}
