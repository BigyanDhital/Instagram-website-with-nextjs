import React, { useState } from "react";
import styles from "./Header.module.css";
import { AiOutlineCompass, AiFillHome } from "react-icons/ai";
import { FiSend, FiSearch, FiHeart, FiCompass } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = { isSearchFocused: false, searchText: "" };
  }

  toggleSearchFocus = () => this.setState(({ isSearchFocused }) => ({ isSearchFocused: !isSearchFocused }));

  render() {
    const { isSearchFocused, searchText } = this.state;
    return (
      <div className={styles.container}>
        <div className="wrapper">
          <div className={styles.innerContainer}>
            <div className={styles.logoContainer}>
              <img src="/images/instagram-logo.png" alt="Logo" />
            </div>
            {/* <div className={styles.searchContainer}> */}
            {/* <div className={styles.searchInner}> */}
            {isSearchFocused ? (
              <div onClick={this.toggleSearchFocus} className={styles.searchContainer}>
                <div className={styles.searchIcon}>
                  <FiSearch color="grey" />
                </div>

                <input placeholder="search" />
              </div>
            ) : (
              <div className={styles.searchContainer}>
                <button className={styles.searchContainerButton} onClick={this.toggleSearchFocus}>
                  <div className={styles.searchIcon}>
                    <FiSearch color="grey" />
                  </div>
                  <p className={styles.searchButtonText}>Search</p>
                </button>
              </div>
            )}
            {/* </div> */}
            {/* </div> */}
            <div className={styles.headerActionsContainer}>
              <div className={styles.headerAction}>
                <AiFillHome size={20} />
              </div>
              <div className={styles.headerAction}>
                <FiSend size={20} />
              </div>
              <div className={styles.headerAction}>
                <FiCompass size={20} />
              </div>
              <div className={styles.headerAction}>
                <FiHeart size={20} />
              </div>
              <div className={styles.headerAction}>
                <FaRegUserCircle size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
