import React, { useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import posthog from "posthog-js";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div style={{ marginBottom: "20px" }}>
          <code>npx webhook-store-cli --port 9000</code>
        </div>
        <img
          src="img/demo.gif"
          alt="funny animation GIF"
          style={{ maxWidth: "60%" }}
        />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  useEffect(() => {
    posthog.init("phc_gaWo4JFok5X2n792nFxFstwZDJS9b2Wtt9jFTmEMV0Z", {
      api_host: "https://app.posthog.com",
    });
  }, []);
  return (
    <Layout
      title={`Docs for ${siteConfig.title}`}
      description={`Documentation for ${siteConfig.title}`}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
