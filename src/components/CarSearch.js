import { useDispatch, useSelector } from 'react-redux';

function CarSearch() {

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          className="input"
        />
      </div>
    </div>
  );
}
  export default CarSearch;
  