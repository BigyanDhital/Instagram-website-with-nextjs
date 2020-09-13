import styles from "./Sidebar.module.css";
const Sidebar = ({ user }) => {
  return (
    <div>
      <div>
        <div>
          <img src={user.profileImage} />
        </div>
        <div>
          <p className="">{user.name}</p>
          <p className="">{user.username}</p>
        </div>
      </div>
      <div>
        <div className="columns">
          <p className={`column is-two-thirds ${styles.suggestionsForYou}`}>Suggestions for you</p>
          <a className={`column ${styles.seeAll}`}>See All</a>
        </div>
        <div>
          {new Array(5).fill("").map((suggestion) => {
            return (
              <div className={styles.suggestionContainer}>
                <div className={styles.imageContainer}>
                  <img src={user.userImageURL} />
                </div>
                <div className={styles.userDetails}>
                  <div>
                    <p className={styles.userName}>{user.user}</p>
                    <p className={styles.tag}>new to instagram</p>
                  </div>
                  <button className={styles.followButton}>follow</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
