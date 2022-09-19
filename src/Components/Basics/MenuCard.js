import React from "react";

const MenuCard = ({ menuData }) => {

  return (
    <>
   <section className="main-card--cointainer">
      {menuData.map((currElem) => {

        const {id,name,image,description,price} = currElem;

        return (
          <>
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <span className="card-author subtle"></span>
                  <h2 className="card-title">{name}</h2>
                  <span className="card-description subtle">
                   {description}
                  </span>
                  <div className="card-read">Read</div>
                </div>
                <img src={image} alt="images" className="card-media" />
                <span className="card-description ">
                   {price}
                  </span>
                <span className="card-tag">Order Now</span>
              </div>
            </div>
          </>
        );
      })}
      </section>
    </>
  );
};

export default MenuCard;
