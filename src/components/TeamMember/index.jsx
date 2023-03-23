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

  // Use react-spring to animate the height of the details section, not sure if opacity is needed
  const detailsAnimation = useSpring({
    height: showDetails ? height : 0,
    opacity: showDetails ? 1 : 0,
    overflow: "hidden",
    config: { duration: 300 },
  });

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Get holidays for the current year and country which we'll have to sort through later
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

    try {
      const response = await axios.request(options);
      // move the holidays to state when we get them
      setHolidays(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Render the holiday indicators, need to shorten this
  const renderHolidayIndicators = () => {
    const today = new Date();
    const indicators = [];

    for (let i = 0; i < 5; i++) {
      // Get the date for the next 5 days based on the current date
      const currentDate = new Date(today);
      currentDate.setDate(currentDate.getDate() + i);
      const currentDateString = currentDate.toISOString().split("T")[0];

      // Check if said date is a holiday  by comparing it to the holidays array in state
      const isHoliday = holidays.some((holiday) => {
        const isDateMatch = holiday.date === currentDateString;
        const isCountryMatch = holiday.countryCode === props.countryCode;
        // Also need to check for region match, as some countries have multiple regions with different holidays
        const isRegionMatch =
          !holiday.region || holiday.region === props.region;

        return isDateMatch && isCountryMatch && isRegionMatch;
      });

      // Push the indicator to the array to be rendered in the JSX
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
      {/* The animated.div is what's animating the height of the details section, built in to react spring */}
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
            {/* Linter keeps putting these weird curly braces around a space. Can't stop it */}
            Repo:{" "}
            <a
              href={props.github_repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.github_repo}
            </a>
          </p>
          {/* Todo: move cursor css to scss file */}
          <button style={{ cursor: "pointer" }} onClick={getHolidays}>
            Check upcoming holidays
          </button>
          {showHolidays &&
            <div className="show-holidays"><p>Next 5 days</p> {renderHolidayIndicators()}</div>
          }
          <Weather location={props.location} />
        </div>
      </animated.div>
    </div>
  );
}

export default TeamMember;
