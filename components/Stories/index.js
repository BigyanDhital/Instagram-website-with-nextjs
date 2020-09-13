import React from "react";
import styles from "./Stories.module.scss";
export default function Stories({ people }) {
  console.log({ people });
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.storiesContainer}>
          {people.map((person) => {
            return (
              <div key={person.id} className={styles.storyContainer}>
                <div key={person.id} className={styles.storyImageContainer}>
                  <img loading="lazy" src={person.previewURL} />
                </div>
                <p className={styles.username}>{person.user}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
