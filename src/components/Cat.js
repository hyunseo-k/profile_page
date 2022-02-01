import PropTypes from "prop-types";

function Cat({ fact }) {
  return (
    <div>
      <h2>오늘의 고양이 상식</h2>
      <p>{fact}</p>
    </div>
  );
}

Cat.propTypes = {
  fact: PropTypes.string.isRequired,
};
export default Cat;
