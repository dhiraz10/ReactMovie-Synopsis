import styled from 'styled-components';
export const SingleContainer = styled.div`
  color: #fff;
  height: 100vh;

  .wapperStyle {
    padding: 50px 10px 0px 10px;
    text-align: center;
  }
  .cardstyle {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin-top: 40px;
    /* height:500px; */
  }
`;
export const Img = styled.img`
  margin: 10px;
  padding: 10px;
  height: 400px;
  width: 300px;
`;
export const H2 = styled.h2`
  color: rgba(248, 231, 28);
  text-transform: uppercase;
  /* writing-mode: vertical-rl; */
  margin-bottom: 20px;
`;
export const Paragraph = styled.p`
  margin: 10 px;
  font-family: 'Poppins', sans-serif;
`;
export const Overview = styled.h3`
  margin: 5px;
  color: rgba(255, 255, 255, 0.7);
`;
