import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto 0;
  /* border: 2px solid red; */
  @media screen and (max-width: 900px) {
    margin: auto;
    height: 100vh;
  }
`;

export default Container;