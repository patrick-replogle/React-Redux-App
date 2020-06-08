import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchDogs } from "../actions";
import Dog from "./Dog";

const DogList = props => {
  const [breed, setBreed] = useState("husky");

  const handleChange = e => {
    e.preventDefault();
    setBreed(e.target.value);
  };

  useEffect(() => {
    props.fetchDogs(breed);
  }, [breed]);

  if (props.isFetching) {
    return <h2>Loading Dog Pictures...</h2>;
  }

  return (
    <div className="formContainer">
      <h3>Change Breed</h3>
      <select value={breed} onChange={handleChange}>
        <option value="husky">Husky</option>
        <option value="beagle">Beagle</option>
        <option value="boxer">Boxer</option>
        <option value="doberman">Doberman</option>
        <option value="newfoundland">Newfoundland</option>
        <option value="shiba">Shiba</option>
        <option value="eskimo">Eskimo</option>
      </select>
      <div className="dogListContainer">
        {props.error && <p>{props.error}</p>}
        {props.dogs.map(dog => (
          <Dog dog={dog} key={dog.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    dogs: state.dogs,
    breed: state.breed,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchDogs })(DogList);
