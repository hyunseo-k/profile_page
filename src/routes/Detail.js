import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "./Detail.module.css";
import Badge from "react-bootstrap/Badge";

function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    //console.log(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1 className={styles.loader}>Loading...</h1>
      ) : (
        <div className={styles.section}>
          <img src={movie.large_cover_image} alt={movie.title} />
          <h2 style={{ fontFamily: "fantasy" }}>{movie.title}</h2>
          <p>
            <Badge pill bg="danger">
              Rating
            </Badge>
            {` ${movie.rating}`}
          </p>
          <p>
            <Badge pill bg="info">
              Download count
            </Badge>
            {` ${movie.download_count}`}
          </p>
          <p>
            <Badge pill bg="primary">
              Like count
            </Badge>
            {` ${movie.like_count}`}
          </p>
          <p>
            <Badge pill bg="warning">
              Runtime
            </Badge>
            {` ${movie.runtime}`}
          </p>
          <p>{movie.description_full}</p>
          <ul>
            {movie.genres && movie.genres.map((g) => <li key={g}>{g}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Detail;
