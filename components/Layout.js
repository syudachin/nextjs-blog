import Head from "next/head";
import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";

const name = "syudachin";
export const siteTitle = "Nex.js blog";

function Layout({children, home}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img src="/images/profile.png" className={`${utilStyles.borderCircle} ${utilStyles.headerHomeImage}`} />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ): (
          <>
            <img src="/images/profile.png" className={`${utilStyles.borderCircle}`} />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}

      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;