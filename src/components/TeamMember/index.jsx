import React, { useState, useEffect } from "react";
import "../../scss/style.css";
import { useSpring, animated } from "react-spring";
import useMeasure from "react-use-measure";
import axios from "axios";
import Weather from "../../components/weatherAPI/Weather";

function TeamMember(props) {
  const [showDetails, setShowDetails] = useState(false);
  const [ref, { height }] = useMeasure();
  const [holidays, setHolidays] = useState([]);
  const [showHolidays, setShowHolidays] = useState(false);

  const detailsAnimation = useSpring({
    height: showDetails ? height : 0,
    opacity: showDetails ? 1 : 0,
    overflow: "hidden",
    config: { duration: 300 },
  });

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const getHolidays = async () => {
    setShowHolidays(true);
    const options = {
      method: "GET",
      url: `https://public-holiday.p.rapidapi.com/${new Date().getFullYear()}/${props.countryCode}`,
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_HOL_KEY,
        "X-RapidAPI-Host": "public-holiday.p.rapidapi.com",
      },
    };

    console.log(options.url);

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setHolidays(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderHolidayIndicators = () => {
    const today = new Date();
    const indicators = [];

    for (let i = 0; i < 5; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(currentDate.getDate() + i);
      const currentDateString = currentDate.toISOString().split("T")[0];

      const isHoliday = holidays.some((holiday) => {
        const isDateMatch = holiday.date === currentDateString;
        const isCountryMatch = holiday.countryCode === props.countryCode;
        const isRegionMatch =
          !holiday.region || holiday.region === props.region;

        return isDateMatch && isCountryMatch && isRegionMatch;
      });

      indicators.push(
        <div
          key={i}
          style={{
            display: "inline-block",
            backgroundColor: isHoliday ? "red" : "green",
            color: "white",
            width: "30px",
            height: "30px",
            lineHeight: "30px",
            textAlign: "center",
            borderRadius: "4px",
            margin: "5px",
          }}
        ></div>
      );
    }

    return showHolidays ? indicators : null;
  };

  return (
    <div className="TeamMember">
      <h2 onClick={toggleDetails} style={{ cursor: "pointer" }}>
        {props.name} - {props.job_title}
      </h2>
      <animated.div style={detailsAnimation}>
        <div ref={ref}>
          <h3>{props.job_title}</h3>
          <p>Location: {props.location}</p>
          <p>
            Email: <a href={`mailto:${props.email}`}>{props.email}</a>
          </p>
          <p>
            Phone: <a href={`tel:${props.telephone}`}>{props.telephone}</a>
          </p>
          <p>Hired on: {props.hire_date}</p>
          <p>
            Repo:{" "}
            <a
              href={props.github_repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.github_repo}
            </a>
          </p>
          <button style={{ cursor: "pointer" }} onClick={getHolidays}>
            Check upcoming holidays
          </button>
          <div>{renderHolidayIndicators()}</div>
          <Weather location={props.location} />
        </div>
      </animated.div>
    </div>
  );
}

export default TeamMember;
