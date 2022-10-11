import React, { useRef } from "react";

import classes from "./AddMovie.module.css";
// import ErrorModal from "./UI/ErrorModal";

function AddMovie(props) {
  // const [error, setError] = useState();

  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    // if (
    //   movie.title.trim().length === 0 ||
    //   movie.openingText.trim().length === 0 ||
    //   movie.releaseDate.trim().length === 0
    // ) {
    //   setError({
    //     title: "Invalid input",
    //     message: "Please enter the field.",
    //   });
    // }

    props.onAddMovie(movie);
    titleRef.current.value = '';
    openingTextRef.current.value = '';
    releaseDateRef.current.value = '';
  }

  // const errorHandler = () => {
  //   setError(null);
  // };

  return (
    <>
      {/* {error && <ErrorModal
        title={error.title}
        message={error.message}
        onConfirm={errorHandler}
      />} */}
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" ref={titleRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="opening-text">Opening Text</label>
          <textarea rows="5" id="opening-text" ref={openingTextRef} required></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="date">Release Date</label>
          <input type="date" id="date" ref={releaseDateRef} required />
        </div>
        <button>Add Movie</button>
      </form>
    </>
  );
}

export default AddMovie;
