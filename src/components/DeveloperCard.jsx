import React from "react";

function DeveloperCard({ title, description, link, textLink, image }) {
  return (
    <div className="card">
      <img src={image} alt="" className="card-img-top" />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} className="btn btn-primary" rel="noopener noreferrer">
          {textLink}
        </a>
      </div>
    </div>
  );
}

export default DeveloperCard;
