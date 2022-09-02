import React from 'react';
import PropTypes from 'prop-types';

const List = ({ people }) => {
  return (
    <>
      {
        people.map( person => {

          const { id, name, age, image } = person;

          return(
            <article
              key={ id }
              className="person"
            >
              <img src={ image } alt={ name }/>
              <div>
                <h4>{ name }</h4>
                <p>{ age } años</p>
              </div>
            </article>
          );
        })
      }
    </>
  );
};

export default List;

List.propTypes = {
  people: PropTypes.array
}