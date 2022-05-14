import React from "react";
import TypeAnimation from "react-type-animation";
import styles from "./styles.module.css";
import { names } from "./names";

const randomName = names[Math.floor(Math.random() * names.length)];
const namesWithDelay = names.reduce((acc, current) => {
  acc.push(current.toLocaleLowerCase());
  acc.push(2000);
  return acc;
}, []);

export default function WebhookStoreUrl() {
  return (
    <p className="hero__subtitle">
      <span>Claim your subdomain</span>
      <br />

      <a
        href={`https://${randomName}.webhook.store`}
        className={styles.heroLink}
      >
        https://
        <TypeAnimation
          cursor={false}
          sequence={namesWithDelay}
          wrapper="span"
          repeat={Infinity}
        />
        .webhook.store
      </a>
    </p>
  );
}
