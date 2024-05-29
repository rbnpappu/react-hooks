import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./styles/component.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"; // Importing the correct icons

const ComponentUseEffectHook = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Start with loading true
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://api.thecatapi.com/v1/images/search?limit=30&breed_ids=beng&api_key=live_OEQQDLv8azuyokCcM0veEDfKYeHZUi7N7zndQfl9Gp21heqHFB2sSSAa75IgFWqb"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Always set loading to false after fetching, whether it succeeds or fails
      }
    }
    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const leftShift = () => {
    setIndex((prevIndex) => Math.max(0, prevIndex - 4));
  };

  const rightShift = () => {
    setIndex((prevIndex) => Math.min(prevIndex + 4, data.length - 4));
  };


  return (
    <div className="ComponentUseEffectHook">
      {loading ? (
        "Loading...."
      ) : (
        <div className={styles.container}>
          <button disabled={index <= 0} onClick={leftShift} className={styles.button}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {data.slice(index, index + 4).map((item, i) => (
            <img
              key={i}
              src={item.url}
              alt="Random Cat"
              className={styles.img}
            />
          ))}

          <button disabled={index + 4 >= data.length} onClick={rightShift} className={styles.button}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ComponentUseEffectHook;
