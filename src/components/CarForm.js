import { useDispatch, useSelector } from "react-redux";

function CarForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input className="input is-expanded" />
          </div>

          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              type="number"
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
