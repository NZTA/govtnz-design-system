import React from 'react';
import Container from '@govtnz/ds/build/react-ts/FlexContainer';
import Row from '@govtnz/ds/build/react-ts/FlexRow';
import Column from '@govtnz/ds/build/react-ts/FlexColumn';

//import Search from './search'
import LogoLockUp from './LogoLockUp';
import NavigationLarge from './navigationLarge';
import NavigationSmall from './navigationSmall';

import './header.scss';

type Props = {
  siteTitle: string;
};

const Header = ({ siteTitle }: Props) => (
  <header id="header" role="banner">                
                <div class="global-nav theme--strong">

<div class="[ wrapper ]">
    <div class="[ layout ]">
        <div class="[ grid grid--middle ]">            
            <div class='[ col large-4 medium-3 small-5 ] '>
                <a href='/' class='i i-nzta-logo' accesskey="h">
                    <span class="sr-only">NZ Transport Agency</span>
                </a>
            </div>

            <div class='[ col large-6 medium-7 small-5 ] global-nav__items '>

                {/* <a href="#menu" data-navigation class="hide-medium menu-small">
                    
                    <i class="i i-menu i--white"></i>

                    <span class="hide-small ">Menu</span>

                </a>

                <a data-navigation href='#menu' class=" hide-small nav-pill menu" accesskey="m">
        
                    <i class="i i-menu i--white"></i>
                    Menu 
        
                </a>

                <form action="/search" method="GET" class="search-container hide-small">
                   
                    <input placeholder="What are you looking for?" type="text" name="term" class="nav-pill search__input"/>
                    <button class="[ i i--small i-search i--white ] search__icon" type="submit"></button>
                
                </form>

                <a href='/search' class='hide-medium search-small'><i class="i i-search i--white "></i></a> */}

            </div>
  
        </div>

    </div>

</div>

</div>



                <div class="header theme--dark">

    
    
    <div class="[ section-m ] header__title">
        <div class="wrapper">
            <div class="layout ">
                <div class="grid">

                    <div class="[ col medium-8 ]">

                        <ol class="breadcrumb">
                
                            

                                
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                

                            

                                

                            

                        </ol>

                        
                            <h1>
                                NZTA Pattern library
                            </h1>
                        

                        

                    </div>

                </div>

            </div>                   
        </div>
    </div>
  
</div>

      




      
    {/* <div className="header">
      <Container width="fixed">
        <Row>
          <Column xs="10" sm="10" md="8" lg="8">
            <LogoLockUp siteTitle={siteTitle} />
          </Column>
          <Column xs="2" sm="2" md="4" lg="4">
            <NavigationSmall siteTitle={siteTitle} />
          </Column>
        </Row>
      </Container>
    </div>
    <div className="subheader">
      <Container width="fixed">
        <div className="subheader__row">
          <div className="subheader_column1">
            <span className="subheader__badge">Alpha</span>
          </div>
          <div className="subheader_column2">
            <a
              href="https://confirmsubscription.com/h/j/712F84D0A3086D2B"
              className="subheader__link"
            >
              Subscribe
            </a>{' '}
            for updates on the Design System
          </div>
        </div>
      </Container>
    </div>
    <NavigationLarge /> */}
  </header>
);

export default Header;
