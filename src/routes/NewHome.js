import React, { useEffect, useState } from "react";
import Cat from "../components/Cat";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";
import styles from "./NewHome.module.css";

function NewHome() {
  const [cats, setCats] = useState("");
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
      <h2
        style={{
          textAlign: "center",
          color: "#b97687",
          fontFamily: "fantasy",
        }}
      >
        Hyunseo Kang
      </h2>

      <div className={styles.section}>
        <h3
          style={{
            fontFamily: "fantasy",
          }}
        >
          Profile
        </h3>
        <p></p>
        <p>
          <h5>Affliation: </h5>
          Sungkyunkwan University, Korea
        </p>
        <p>
          <h5>Interests: </h5>
          <ul>
            <li>Computer science</li>
            <li>Music</li>
            <li>Dancing</li>
            <li>Baking</li>
            <li>Watching Movies</li>{" "}
            <div>
              <Button variant="warning">
                <Link to={`/movie`}>Movies I recommand</Link>
              </Button>{" "}
            </div>
            <li>Photo</li>
          </ul>
        </p>
      </div>
      <div className={styles.section}>
        <h3
          style={{
            fontFamily: "fantasy",
          }}
        >
          Contact me!
        </h3>
        <Table striped bordered hover variant="dark">
          <tbody>
            <tr>
              <td>Github</td>
              <td>@hyunseo-k</td>
              <td>
                <Button variant="warning" href="https://github.com/hyunseo-k">
                  Github Page
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>jelly9999@g.skku.edu</td>
              <td>
                <Button variant="warning" href="https://www.google.com">
                  Send Email
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <td>Instagram</td>
              <td>@gracia_0619</td>
              <td>
                <Button
                  variant="warning"
                  href="https://www.instagram.com/gracia_0619/"
                >
                  Instagram Page
                </Button>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className={styles.section}>
        <Cat fact={cats} />
      </div>
    </div>
  );
}

export default NewHome;
