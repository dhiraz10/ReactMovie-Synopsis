import styled from "styled-components";

 export const NavWraper = styled.div `


  display: flex;
  justify-content: space-between;
  align-items: center;

.nav-link{
    color:  #fff !important;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    cursor:pointer;
    &:active{
    color: yellow !important;
  }
}
.logo{
  color:  rgba( 248, 231, 28, 0.55 )!important;
  text-decoration: none !important;
  font-family: 'Poppins', sans-serif;
cursor:pointer;
font-size: 2rem;
font-weight: bold;
}
.navbarstyle{
  background: ${({scrollNav})=>(scrollNav ? '#000' :'transparent')};

}
`;
