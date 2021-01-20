import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer `
background-color: #101522;
`
export const FooterWrap =styled.div `
padding: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`
export const FooterLinksContainer= styled.div `
display: flex;
justify-content: center;
color:yellow;

@media screen and (max-width: 820px){
    padding-top:32px;

}`

export const FooterLinksWrapper= styled.div `
display:flex;

@media screen and (max-width:820px){
    flex-direction:column;
}`

export const FooterLinksItems =styled.div `
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 2px;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px){
    margin:0;
    padding: 10px;
    width: 100%;
}
`


export const FooterLink = styled(Link)`
color:#fff;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;

&:hover{
    color: yellow;
    transition: 0.3s ease-out;
}`;

export const SocialMedia =styled.section `
max-width: 1000px;
width: 100%;
`
export const SocialMediaWrap =styled.div `
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
 
 @media screen and (max-width: 820px){
     flex-direction: column;
 }
`

export const SocialLogo = styled(Link) `
color:#fff;
justify-self: start;
cursor: pointer;
text-decoration: none !important;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-bottom: 16px;
font-weight: bold;

&:hover{
    color:yellow;
}
`

export const WebsiteRights = styled.small `
color: #fff;
margin-bottom: 16px;
&::before{
    display: flex;
    justify-content: center;
    content: "( Dhiraj Chauhan )"
}

`

export const SocialIcons =styled.div `
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;`

export const SocialIconsLink = styled.a `
color: #fff;
padding-left:30px;
font-size: 24px;
display: flex;
justify-content: space-between;
align-items: center;
&:hover{
    color:yellow;
}
`;