import React, { useCallback, useEffect, useState } from "react";

const greetingsText = [
  {
    text: "Halo",
    font: "Poppins",
  },
  {
    text: "Hi",
    font: "Playfair Display",
  },
  {
    text: "Hola",
    font: "Italiana",
  },
  {
    text: "Bonjour",
    font: "Sofia",
  },
  {
    text: "Ni Hao",
    font: "Dosis",
  },
  {
    text: "Annyeonghaseyo",
    font: "Patrick Hand SC",
  },
];

const Greetings = () => {
  const [newGreetings, setnewGreetings] = useState("");
  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * greetingsText.length);
    setnewGreetings(greetingsText[index]);
  });

  useEffect(() => {
    const intervalID = setInterval(shuffle, 1000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <p
      className="greetings-text"
      style={{ fontFamily: newGreetings.font, fontSize: 36, color: "#f2f4f8" }}
    >
      {newGreetings.text}
    </p>
  );
};

export default Greetings;
