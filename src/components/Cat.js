import PropTypes from "prop-types";

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
    </div>
  );
}

Cat.propTypes = {
  fact: PropTypes.string.isRequired,
};
export default Cat;
