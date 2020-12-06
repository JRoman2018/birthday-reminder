import React from 'react';

const List = ({ people, setPeople }) => {
  const removePerson = (id) => {
    setPeople(people.filter((x) => x.id !== id));
  };

  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
            <button className="btn" onClick={() => removePerson(id)}>
              Remove
            </button>
          </article>
        );
      })}
    </>
  );
};

export default List;
