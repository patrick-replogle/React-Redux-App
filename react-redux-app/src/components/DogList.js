import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchDogs } from "../actions";
import Dog from "./Dog";

const DogList = props => {
  useEffect(() => {
    props.fetchDogs();
  }, []);

  if (props.isFetching) {
    return <h2>Loading Dog Pictures...</h2>;
  }

  return (
    <div className="dogListContainer">
      {props.error && <p>{props.error}</p>}
      {props.dogs.map(dog => (
        <Dog dog={dog} key={dog.id} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dogs: state.dogs,
    breed: state.breed,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchDogs })(DogList);
