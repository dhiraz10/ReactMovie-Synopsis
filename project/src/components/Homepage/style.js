import styled from "styled-components";

export const HomeWrapper = styled.div `
.slick-arrow{
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 1.0px );
    height:150px;
    width:25px;
    border-radius:100px;
}
.slick-arrow:hover, .slick-arrow:active, .slick-arrow:focus{
    backdrop-filter: blur( 11.0px );
    border: 3px solid rgba( 255, 255, 255, 0.18 );
 
}
.link {
    text-decoration: none;
    color:  rgba( 0, 0, 0, 1);
  
}
.cardstyle{
    background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 1.0px );
-webkit-backdrop-filter: blur( 1.0px );
border-radius: 30px;
justify-content: center;
align-items: center;
/* height:500px; */

}
.imgstyle{
    
    padding-top:20px;
    border-radius: 30px;
    height:400px;
    width:300px;
}
.heading{
  color:000;
    font-family: 'Poppins', sans-serif;
    font-weight: lighter;
}

`;
export const Section = styled.section`
background: url('/ReactMovie-Synopsis/Img/movie.jpg') center;
background-size:cover;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
/* margin-top: -70px; */
`;


export const Section2 = styled.section`
background: url('/ReactMovie-Synopsis/Img/watch.jpg') center;
background-size:cover;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
/* margin-top: 70px; */
`;
export const Section3 = styled.section`
background: url('/ReactMovie-Synopsis/Img/top.jpg') center;
background-size:cover;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
/* margin-top: -70px; */
`;