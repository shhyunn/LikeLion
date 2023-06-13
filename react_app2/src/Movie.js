import react from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
    return <div class="movie">
        <img src={poster} alt={title} title={title}></img>
        <h4>{title}</h4>
        <h5>{year}</h5>
        <p>{summary}</p>
    </div>


}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;
