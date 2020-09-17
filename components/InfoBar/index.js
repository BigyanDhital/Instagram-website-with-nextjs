import React from "react";
import styles from "./InfoBar.module.css";

export default function index({ text }) {
  return (
    <div className={styles.container}>
      <p>{text}</p>
    </div>
  );
}
