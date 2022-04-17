import React from "react";
import "./TeacherDetails.css";
import db from "./db";
import School from "./School";
import { useState } from "react";

const RequiredData = () => {
  const [Data, setData] = useState(db);

  const filterItem = (name) => {
    const updatedList = db.filter((currElem) => {
      return currElem.name === name;
    });
    setData(updatedList);
  };

  const filterGender = (gender) => {
    const updatedList2 = db.filter((currElem) => {
      return currElem.gender === gender;
    });
    setData(updatedList2);
  };

  const lowToHigh = () => {
    var bob = [...db];
    bob.sort((a, b) => a.age - b.age);
    setData(bob);
  };

  const highToLow = () => {
    var mob = [...db];
    mob.sort((a, b) => b.age - a.age);
    setData(mob);
  };

  const allInOne = () => {
    setData(db);
  };

  return (
    <>
      <div>
        <div>
          <button
            onClick={() => {
              allInOne();
            }}
          >
            All
          </button>

          <button
            onClick={() => {
              lowToHigh();
            }}
          >
            Asc Age
          </button>

          <button
            onClick={() => {
              highToLow();
            }}
          >
            Desc Age
          </button>

          <button onClick={() => filterGender("Male")}>Male</button>
          <button onClick={() => filterGender("Female")}>Female</button>
          <br />
          <label htmlFor="">(Sort by Teacher Name: )</label>
          <button onClick={() => filterItem("Tawsha")}>Tawsha</button>
          <button onClick={() => filterItem("Brucie")}>Brucie</button>
          <button onClick={() => filterItem("Warden")}>Warden</button>
          <button onClick={() => filterItem("Jobie")}>Jobie</button>
        </div>

        <School Data={Data} />
      </div>
    </>
  );
};

export default RequiredData;
