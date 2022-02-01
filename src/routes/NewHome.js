import React, { useEffect, useState } from "react";
import Cat from "../components/Cat";
import { Link } from "react-router-dom";

function NewHome() {
  const [cats, setCats] = useState([]);
  const getCats = async () => {
    const json = await (await fetch(`https://catfact.ninja/fact`)).json();
    //console.log(json);
    setCats(json.fact);
    console.log(json.fact);
  };

  useEffect(() => {
    getCats();
  }, []);
  return (
    <div>
      <h2>Hyunseo Kang</h2>
      <h2>
        <Link to={`/movie`}>Go</Link>
      </h2>
      <Cat fact={cats} />
    </div>
  );
}

export default NewHome;
