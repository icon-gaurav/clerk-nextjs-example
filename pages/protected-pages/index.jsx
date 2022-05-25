import styles from "./../../styles/Home.module.css";
import React, { useEffect } from "react";
import { useSession } from "@clerk/nextjs";

const ProtectedPage = () => {
  const { getToken } = useSession();
  const fetchToken = async () => {
    const token = await getToken({ template: "hasura" });
    console.log(token);
  };
  useEffect(() => {
    fetchToken().then(r => {
    });
  }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Protected page</h1>
        <p className={styles.description}>
          Only authenticated users can see this page. Every page under /protected-pages/ is protected using
        </p>
        <pre style={{ textAlign: "center" }}>
          <code className="language-js">withEdgeMiddlewareAuth()</code>
        </pre>
        <p className={styles.description}>
          Check the source code of the following file to see where the magic happens:
        </p>
        <pre style={{ textAlign: "center" }}>
          <code className="language-js">/pages/protected-pages/_middleware.js</code>
        </pre>
      </main>
    </div>
  );
};

export default ProtectedPage;
