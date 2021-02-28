import styled from "styled-components";
export const Container = styled.div`
  padding: 20px 60px;
  background: #fff;
  //radial-gradient(circle, rgba(0, 181, 204, 1)0%, rgba(52, 152, 219, 1)100%);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 2000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 40px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(235px, 1fr));
  grid-gap: 10px;
`;

export const Link = styled.a`
  color: #000000;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 19px;
  text-decoration: none;

  &:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }
`;
export const linkStyles = {
  color: "#000000",
  marginTop: "10px",
  marginBottom: "20px",
  fontSize: "19px",
  textDecoration: "none",

  "&:hover": {
    color: "#ff9c00",
    transition: "200ms ease-in",
  },
};

export const Title = styled.p`
  font-size: 19px;
  color: #000000;
  margin-right: 45px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: bold;
`;
