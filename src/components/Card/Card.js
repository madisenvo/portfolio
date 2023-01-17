import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 18rem;
  
`;


export default function Card({img, name, github, deployed}) {
  // const cardStyle = {
  //   width: '18rem',
  // };

  return (
    <div className="container">
      <CardContainer>
        <img
          className="card-img-top"
          src={img}
        />
        <div className="card-body">
        <h5 className="card-title">{name}</h5>
          <a href={github} className="btn btn-primary">
            Github Repo
          </a>
          <a href={deployed} className="btn btn-primary">
            Deployed Site
          </a>
        </div>
      </CardContainer>
    </div>
  );
}
