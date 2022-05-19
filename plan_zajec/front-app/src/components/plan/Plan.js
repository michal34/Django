import "./Plan.scss";
import React, { useState, useEffect } from "react";
import { plansService } from "../../services/plan.service";
import { classesService } from "../../services/classes.service";
import { subjectsService } from "../../services/subjects.service";

const Plan = () => {
  const [classes, setClasses] = useState([]);
  const [plans, setPlans] = useState({ 1: [], 2: [], 3: [], 4: [], 5: [] });
  const [subjects, setSubjects] = useState({});
  const hours = [
    ["08:55", "09:40", 10],
    ["09:50", "10:35", 15],
    ["10:50", "11:35", 10],
    ["11:45", "12:30", 30],
    ["13:00", "13:45", 15],
    ["14:00", "14:45", 10],
    ["14:55", "15:40", 5],
    ["15:45", "16:30", 0],
  ];

  const renameLesson = (subjectId) => {
    const sub = subjects.filter((sub) => subjectId === sub._id);
    return sub[0] ? sub[0].name : "---";
  };

  const selectPlan = (classId) => {
    plansService.getPlans(classId).then((res) => {
      if (res.data.success) {
        setPlans(res.data.plans.plan);
      }
    });
  };

  useEffect(() => {
    subjectsService.getSubjects().then((res) => {
      if (res.data.success) {
        setSubjects(res.data.subjects);
      }
    });
    classesService.getClasses().then((res) => {
      if (res.data.success) {
        setClasses(res.data.classes);
        selectPlan(res.data.classes[0]._id);
      }
    });
  }, []);

  return (
    <div className="plan-container">
      <div className="select-container">
        <select className="select" onChange={(e) => selectPlan(e.target.value)}>
          {classes.map((className, index) => {
            return (
              <option value={className._id} key={index}>
                {className.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="plan-content">
        <div className="hours-container">
          <h2>Godziny</h2>
          {hours.map((hour, index) => {
            return (
              <div key={index} className="hour">
                <span>
                  {index + 1}. {hour[0]}-{hour[1]}
                </span>
              </div>
            );
          })}
        </div>
        <div className="schedule">
          <div className="day">
            <h2>Poniedziałek</h2>
            {plans[1].map((plan, index) => {
              return (
                <p className="day__lessons" key={index}>
                  {renameLesson(plan)}
                </p>
              );
            })}
          </div>
          <div className="day">
            <h2>Wtorek</h2>
            {plans[2].map((plan, index) => {
              return (
                <p className="day__lessons" key={index}>
                  {renameLesson(plan)}
                </p>
              );
            })}
          </div>
          <div className="day">
            <h2>Środa</h2>
            {plans[3].map((plan, index) => {
              return (
                <p className="day__lessons" key={index}>
                  {renameLesson(plan)}
                </p>
              );
            })}
          </div>
          <div className="day">
            <h2>Czwartek</h2>
            {plans[4].map((plan, index) => {
              return (
                <p className="day__lessons" key={index}>
                  {renameLesson(plan)}
                </p>
              );
            })}
          </div>
          <div className="day">
            <h2>Piatek</h2>
            {plans[5].map((plan, index) => {
              return (
                <p className="day__lessons" key={index}>
                  {renameLesson(plan)}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
