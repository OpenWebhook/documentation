import React from "react";
import TypeAnimation from "react-type-animation";
import styles from "./styles.module.css";
import { names } from "./names";
import posthog from "posthog-js";

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

      <button
        onClick={() => {
          window.location.href = `https://${randomName}.webhook.store`;
          posthog.capture("claim_from_documentation");
        }}
        className={styles.heroButton}
      >
        https://
        <TypeAnimation
          cursor={false}
          sequence={namesWithDelay}
          wrapper="span"
          repeat={Infinity}
        />
        .webhook.store
      </button>
    </p>
  );
}
