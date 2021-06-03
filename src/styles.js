import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
 background-image: URL(https://img-9gag-fun.9cache.com/photo/agXRmAv_460s.jpg);

 background-size:cover;
}`;

export const About = styled.h1`
  display: flex;
  justify-content: center;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 25%;
`;
export const Brief = styled.h4`
  display: flex;
  justify-content: center;
`;
export const Items = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-around;
  padding: 10px;
  img {
    height: auto;
    max-height: 250px;
    width: auto;
    max-width: 250px;
  }
`;
