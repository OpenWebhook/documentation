import React from "react";
import TypeAnimation from "react-type-animation";
import styles from "./index.module.css";

const names = [
  "Joshua",
  "Christopher",
  "Mark",
  "Jeffrey",
  "Kendra",
  "Ashley",
  "Bruce",
  "Denise",
  "Wayne",
  "Ashley",
  "Rachael",
  "Steven",
  "Sharon",
  "Holly",
  "Beverly",
  "Janice",
  "Diane",
  "Lauren",
  "Amanda",
  "Sara",
  "Elizabeth",
  "Stephen",
  "Kelly",
  "Joseph",
  "Lindsey",
  "Amy",
  "Cole",
  "Charles",
  "Ashley",
  "Jeffrey",
  "Tammy",
  "Amy",
  "Stacy",
  "Anthony",
  "Brenda",
  "Justin",
  "Patrick",
  "Susan",
  "Christian",
  "Brandon",
  "Alison",
  "Andrew",
  "Christopher",
  "Samantha",
  "Darrell",
  "Sophia",
  "Gina",
  "Teresa",
  "Jeffery",
  "Nicholas",
  "Sheila",
  "Suzanne",
  "Scott",
  "Breanna",
  "Sean",
  "Susan",
  "Elizabeth",
  "Tracy",
  "Ronald",
  "Briana",
  "Michael",
  "Eric",
  "Angel",
  "Joseph",
  "Jennifer",
  "Jeremy",
  "Laura",
  "Kelly",
  "Tanner",
  "Joshua",
  "Michael",
  "Todd",
  "Christine",
  "Natalie",
  "Stephen",
  "Valerie",
  "Kayla",
  "Elizabeth",
  "Jeremy",
  "Rachael",
  "Jason",
  "Chase",
  "Lynn",
  "Heidi",
  "Monica",
  "Kelsey",
  "Miranda",
  "Rodney",
  "Carla",
  "Jose",
  "Christian",
  "Nicole",
  "Amanda",
  "Alexandra",
  "Tina",
  "Carolyn",
  "Malik",
  "Sean",
  "Bobby",
];
const randomName = names[Math.floor(Math.random() * names.length)];
const namesWithDelay = names.reduce((acc, current) => {
  acc.push(current.toLocaleLowerCase());
  acc.push(2000);
  return acc;
}, []);

export function WebhookStoreUrl() {
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
