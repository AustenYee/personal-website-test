import React, { useState, useEffect } from "react";

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date("1999-10-14T09:24:00");
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: "age",
    label: "Current age",
    value: <Age />,
  },
  {
    key: "countries",
    label: "Countries visited",
    value: 7,
  },
  {
    key: "location",
    label: "Current location",
    value: "Bay Area, CA",
  },
  {
    key: "ganes",
    label: "Games found interesting",
    value: "Infinite",
  },
];

export default data;
