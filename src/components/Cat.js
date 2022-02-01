import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";

function Cat({ fact }) {
  return (
    <div>
      <h2
        style={{
          fontFamily: "fantasy",
        }}
      >
        Today's Cat Fact
      </h2>
      <p>{fact}</p>
      <img
        style={{
          width: 200,
          height: 200,
        }}
        src={require("./cat.jpg")}
      />
      <p></p>
      <Alert variant="info"> Refresh[f5] to see new cat fact!</Alert>
    </div>
  );
}

Cat.propTypes = {
  fact: PropTypes.string.isRequired,
};
export default Cat;
