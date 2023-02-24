import React from "react";

export const Footer = () => {
  var today = new Date();

  return (
    <footer>
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h5>Team Member Alocation App - {today.getFullYear()}</h5>
        </div>
      </div>
    </footer>
  );
};
