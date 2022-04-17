import React from "react";
import "./School.css";

const School = ({ Data }) => {
  return (
    <>
      <div>
        <br />
        <span className="top"> Name </span>
        <span className="top"> Subject </span>
        <span className="top"> Grade </span>
        <span className="top"> Section </span>

        <hr />

        {Data.map((curr) => {
          return (
            <>
              {/* <div key={curr.id}>
                <br />
                <div>Id :{curr.id}</div>
                <p>
                  <span>Country : </span>
                  {curr.country}
                </p>
                <p>
                  <span>City : </span>
                  {curr.city}
                </p>
                <p>
                  <span>Population : </span>
                  {curr.population}
                </p>
                <hr />
              </div> */}

              <div key={curr.id}>
                <br />
                <span className="down"> {curr.name} </span>
                <span className="down"> {curr.subject} </span>
                <span className="down"> {curr.grade} </span>
                <span className="down"> {curr.section} </span>
                <hr />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default School;
