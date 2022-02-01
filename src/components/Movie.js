import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
function Movie({ coverImg, title, summary, genres, id }) {
  return (
    <div>
      <h6>Click Title for more information.</h6>
      <div className={styles.movie}>
        <img src={coverImg} alt={title}></img>
        <div>
          <h2 style={{ fontFamily: "fantasy" }} className={styles.movie__title}>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <p>
            {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
          </p>
          <ul className={styles.movie__genres}>
            {genres && genres.map((g) => <li key={g}>{g}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number.isRequired,
};
export default Movie;
