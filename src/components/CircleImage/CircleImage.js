import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const CircleImage = (props) => {
  const [numbers] = useState([0, 1, 2, 3]);
  const [current, setCurrent] = useState(0);

  useInterval(() => {
    if (current < props.data.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  }, 5000);

  return (
    <div style={{ minHeight: "165px" }}>
      {props.data.map((item, index) => {
        return (
          <>
            <div
              className={`${
                index === current ? "d-block" : "d-none"
              } itemImage`}
            >
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
              className={`avatarAlt mr-3 ${
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
