import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const CircleImage = (props) => {
  const [numbers] = useState([0, 1, 2, 3]);
  const [current, setCurrent] = useState(0);

  useInterval(() => {
    if (current < 3) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  }, 5000);

  return (
    <div>
      {props.data.map((item, index) => {
        return (
          <>
            <div className={`${index === current ? "d-block" : "d-none"}`}>
              <p className="quote">{item.text}</p>
              <div className="w-100 d-flex">
                <h4 className="captionBold">{item.name}</h4>
                <h4 className="caption">, {item.company}</h4>
              </div>
            </div>
          </>
        );
      })}
      {props.data.map((item, index) => {
        return (
          <>
            <img
              key={index}
              className={`avatar mr-3 ${
                index === current ? "avatar-focused" : ""
              }`}
              src={item.img}
              alt="Illustration"
            />
          </>
        );
      })}
    </div>
  );
};
function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
export default CircleImage;
