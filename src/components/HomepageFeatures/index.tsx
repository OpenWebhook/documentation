import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Almost No Installation",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Create your self hosted Webhook Store in less than a minute, for free
        using Heroku.
      </>
    ),
  },
  {
    title: "Start Working with your Webhooks",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>Plug the OpenWebhook client to your store and start developping.</>
    ),
  },
  {
    title: "Share with your Team",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        You keep your webhooks from a session to another. Every member of your
        team can replay those webhooks.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
