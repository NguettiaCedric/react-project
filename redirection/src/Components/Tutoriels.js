import React from "react";

const Tutoriel = (props) => {
  // console.log(props);

  setTimeout(() => {
    props.history.push("/");
  }, 5000);

  return (
    <div className="container mt-3">
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Oups,</strong> cette page est en construction vous serai redirige vers la page Docs dans 5 seconde.
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <h1> Tutorial: Intro to React </h1>
    </div>
  );
};

export default Tutoriel;
