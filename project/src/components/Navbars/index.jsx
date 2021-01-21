import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as LinkS } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { NavWraper } from './style';
import { animateScroll as scroll } from 'react-scroll';
const Navbars = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);

    return () => {
      //   console.log('component unmount')
      // useeffect lai cleanup garnu par cha
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <NavWraper scrollNav={scrollNav}>
      <Container>
        <Navbar expand='lg' fixed='top' className='navbarstyle'>
          <Link to='/ReactMovie-Synopsis' className='logo' onClick={toggleHome}>
            Movies-Synopsis
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Link
                to='/ReactMovie-Synopsis'
                className='nav-link'
                onClick={toggleHome}>
                Now Playing
              </Link>
              <LinkS
                activeClass='active'
                to='popularmovie'
                className='nav-link'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-160}
                isDynamic={true}>
                Popular Movies
              </LinkS>

              <LinkS
                activeClass='active'
                to='topRated'
                className='nav-link'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                isDynamic={true}>
                Top Rated
              </LinkS>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </NavWraper>
  );
};
export default Navbars;
