import Head from "next/head";
import fetch from "node-fetch";

import Header from "../components/Header";
import Spacer from "../components/Spacer";
import Stories from "../components/Stories";
import Sidebar from "../components/Sidebar";
import InfoBar from "../components/InfoBar";
import { Posts } from "../components/Post/Post";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  console.log("props are ", props);
  const { posts, people } = props;
  return (
    <div className={styles.page}>
      <Head>
        <title>Instagram by bigyan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main>
        <div style={{ padding: "20px" }}>
          <div className="wrapper">
            <div className="columns">
              <div className="column is-two-thirds">
                <div style={{ margin: "10px 0" }}>
                  <InfoBar text="This is a work in progress. Keep coming back!" />
                </div>
                <Stories {...{ people }} />
                <Spacer space={10} />
                <Posts {...{ posts, people }} />
              </div>
              <div className="column" style={{ flex: 1, padding: "0 20px" }}>
                <Sidebar user={people[0]} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  let posts = [];
  let people = [];
  const urlBase = "https://pixabay.com/api/?key=9830712-3e3ca065b544e613e5f68cb6d";
  try {
    posts = await (await fetch(`${urlBase}&q=landscape,fruits&image_type=photo`)).json();
    people = await (await fetch(`${urlBase}&q=faces&image_type=photo`)).json();
    posts = posts.hits;
    people = people.hits;
  } catch (error) {
    console.log(error);
  }
  return {
    props: { posts, people },
  };
}
