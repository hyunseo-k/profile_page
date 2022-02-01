import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

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
        <h1>LOADING...</h1>
      ) : (
        <div>
          <img src={movie.large_cover_image} alt={movie.title} />
          <h2>{movie.title}</h2>
          <h3>Download count: {movie.download_count}</h3>
          <h3>Like count: {movie.like_count}</h3>
          <h3>Rating: {movie.rating}</h3>
          <h3>Runtime: {movie.runtime}</h3>
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
