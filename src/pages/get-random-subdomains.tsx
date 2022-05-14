import React, { useCallback, useEffect, useState } from "react";

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

export function WebhookStoreUrl() {
  const [subDomain, setnewName] = useState("croute");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 1000);
    return () => clearInterval(intervalID);
  }, [shuffle]);
  return (
    <p
      className="hero__subtitle"
      onClick={() => {
        location.href = `https://${subDomain}.webhook.store`;
      }}
    >
      Try it on {subDomain}.webhook.store
    </p>
  );
}
