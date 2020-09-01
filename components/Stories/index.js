import React from "react";
import styles from "./Stories.module.css";
export default function Stories({ people }) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.storiesContainer}>
          {people.map((person) => {
            return (
              <div key={person.id} style={{ flex: 1, margin: "0 3px" }}>
                <div
                  style={{
                    border: "2px solid orange",
                    borderRadius: 50,
                    display: "flex",
                    alignItems: "center",
                    padding: "2px",
                    justifyContent: "center",
                  }}
                >
                  <img
                    loading="lazy"
                    src={person.previewURL}
                    style={{ height: 60, borderRadius: 60, width: 60, objectFit: "cover" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
