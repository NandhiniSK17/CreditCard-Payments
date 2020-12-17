import React from "react";

const List = ({ creditcard }) => {
  return (
    <>
      {creditcard.map((cards) => {
        const { id, name, duedate, amount, image } = cards;
        return (
          <article key={id} className="cards">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{duedate} December 2020</p>
              <h6> $ {amount} CAD</h6>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
