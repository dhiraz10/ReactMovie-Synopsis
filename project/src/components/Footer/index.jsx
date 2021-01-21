import React from 'react'
import {animateScroll as scroll} from 'react-scroll';
import { FooterContainer,FooterWrap,FooterLinksContainer,
    FooterLinksWrapper,SocialIcons,
    SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,SocialIconsLink
} from "./style";
import {FaFacebook, FaInstagram} from  "react-icons/fa";
function Footer() {
    const toggleHome =() =>{
        scroll.scrollToTop();
      };
    return (
       <FooterContainer>
           <FooterWrap>
               <FooterLinksContainer>
               <FooterLinksWrapper>
                          <p>It's a simple project that is created on React JS</p>
               </FooterLinksWrapper>
               </FooterLinksContainer>
               <SocialMedia>
                   <SocialMediaWrap>
                       <SocialLogo to="/ReactMovie-Synopsis" onClick={toggleHome}>
                                Movies-Synopsis
                       </SocialLogo>
                       <WebsiteRights>  Movies-Synopsis &#169;  {new Date().getFullYear()} &nbsp; All rights reserved .</WebsiteRights>
                       <SocialIcons>
                           <SocialIconsLink href = "//www.facebook.com/dhiraj.chauhan.5268" target="_blank" aria-label="Facebook">
                           
                               <FaFacebook/>
                               Facebook
                           </SocialIconsLink>
                           <SocialIconsLink href = "//www.instagram.com/dhiraz1/" target="_blank" aria-label="Instagram">
                      
                               <FaInstagram/>
                               Instagram
                           </SocialIconsLink>
                       </SocialIcons>
                   </SocialMediaWrap>
               </SocialMedia>
           </FooterWrap>
       </FooterContainer>
    )
}

export default Footer
