import "bootstrap-icons/font/bootstrap-icons.css";

const Input = ({ handleFormSubmit, searchIp, setSearchIp }) => {

  return (
    <div className="mb-4">
      <h2 className="text-center text-white mb-3 mb-md-4 fs-3">IP Address Tracker</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="row justify-content-center g-0">
          <div className="col-md-8 col-lg-5">
            <div className="bg-white rounded-2 d-flex justify-content-between py-1">
              <input
                className="bg-transparent border-0 form-control shadow-none flex-grow-1 text-primary-size"
                id="ipAddress"
                type="text"
                placeholder="Search for any IP address or domain"
                value={searchIp}
                onChange={(e) => setSearchIp(e.target.value)}
              />
              <button className="btn text-primary-size rounded-0 rounded-end border-0" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Input;
