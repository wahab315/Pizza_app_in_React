import React from "react";

const Menus = (props) => {
  return (
    <>
      <div className="menu">
        <h2>Our menu</h2>
        {props.data.length > 0 ? (
          <>
            <p>
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone oven, all organic, all delicious.
            </p>
            <ul className="pizzas">
              {props.data.map((item) => {
                return <Pizza data={item} key={item.id} />;
              })}
            </ul>
          </>
        ) : (
          <p>We're still working on our menu. Please come back later :)</p>
        )}
      </div>
    </>
  );
};

export default Menus;

// Sub components

const Pizza = (props) => {
  const pizzaObj = props.data;
  return (
    <>
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>
          <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
        </div>
      </li>
    </>
  );
};
