import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 20px;
  height: 100%;
  margin: 10px;
`;

export const Image = styled.img`
    display: block;
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
`;

export const Title = styled.div`
    font-weight: bold;
    font-size: 17px;
    margin-top: 10px;
`;

export const Description = styled.p`
    margin-top: 10px;
    text-align: left;
`;

export const Price = styled.div`
    font-weight: bold;
    display: flex;
    justify-content: left;
`;

export const CardButton = styled.button`
    background-color: lightgray;
    outline: none;
    border: none;
    color: black;
    padding: 10px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 0 0 20px 20px;
`;
