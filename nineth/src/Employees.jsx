import maleProfile from "./images/maleProfile.jpg";
import femaleProfile from "./images/femaleProfile.jpg";

const Employees = ({
  employees,
  selectedTeam,
  handleEmployeeChange,
  handleEmployeeClick,
}) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleEmployeeChange}
          >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
      </div>

      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-colection">
            {employees.map((employee) => (
              <div
                key={employee.id}
                id={employee.id}
                className={`card m-2 ${
                  employee.teamName === selectedTeam ? "standout" : ""
                }`}
                style={{ cursor: "pointer" }}
                onClick={(e) => handleEmployeeClick(e)}
              >
                <img
                  src={
                    employee.gender === "female" ? femaleProfile : maleProfile
                  }
                  className="card-img-top"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Full name: {employee.fullName}</h5>
                  <p className="card-text">
                    <b>Desigation: </b> {employee.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
