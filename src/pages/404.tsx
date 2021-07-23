import Head from "next/head";
import styles from "css/404.module.scss";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Page Not Found • 404 - Zaid Mukaddam</title>
        <meta property="og:title" content="Page Not Found - Zaid Mukaddam" />
        <link rel="canonical" href="https://realzaidmukaddam.tech/404" />
      </Head>
      <div className={styles.container404}>
        <h1>404</h1>
        <p>Page Not Found</p>
      </div>
    </>
  );
};

export default Custom404;
