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
                            <LogoLockUp siteTitle={siteTitle} />
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
                                    Pattern library
                                </h1>
                            </div>
                        </div>
                    </div>                   
                </div>
                
                <div class='wrapper'>

    <div class='[ layout ]'>
        
        <div class='[ grid ]'>

            <ul class='list-inline [ col ] styleguide__navigation'>
                
                <li>
                    <a href='/pattern-library/type/' class='{% if item.title == "type" %} navigation__active{% endif %}'>
                        Type
                        <i class='arrow arrow-bottom'></i>
                    </a>
                </li>
                
                <li>
                    <a href='/pattern-library/themes/' class='{% if item.title == "themes" %} navigation__active{% endif %}'>
                        Themes
                        <i class='arrow arrow-bottom'></i>
                    </a>
                </li>
                

                <li>
                    <a href='/pattern-library/ui-components/' class='{% if item.title == "components" %} navigation__active {% endif %}'>
                        Components
                        <i class='arrow arrow-bottom'></i>
                    </a>
                </li>

                <li>
                    <a href="/pattern-library/grid/" class="{% if item.title == 'grid' %}navigation__active{% endif %}">
                        Grid
                        <i class="arrow arrow-bottom"></i>
                    </a>
                </li>

                <li>
                    <a href='/pattern-library/patterns/' class='arrow--center{% if item.title == "patterns" %} navigation__active {% endif %}'>
                        Patterns
                        <i class='arrow arrow-bottom'></i>
                    </a>
                </li>
               
                <li>
                    <a href="/pattern-library/forms/" class='{% if item.title == "forms" %} navigation__active{% endif %}'>
                        Forms
                        <i class="arrow arrow-bottom"></i>
                    </a>
                </li>

                <li>
                    <a href="/pattern-library/pages/" class='{% if item.title == "pages" %} navigation__active{% endif %}'>
                        Pages
                        <i class="arrow arrow-bottom"></i>
                    </a>
                </li>

                <li>
                    <a href="/pattern-library/traffic-info/" class="{% if item.title == 'traffic_info' %}navigation__active{% endif %}">
                        Traffic info
                        <i class="arrow arrow-bottom"></i>
                    </a>
                </li>
                
                <li>
                    <a href="/pattern-library/accessibility/" class="{% if item.title == 'accessibility' %} navigation__active{% endif %}">
                        Accessibility
                        <i class="arrow arrow-bottom"></i>
                    </a>
                </li>

                <li>
                    <a href="/pattern-library/content/" class="{% if item.title == 'content' %} navigation__active{% endif %}">
                        Content style guide 
                        <i class="arrow arrow-bottom"></i>
                    </a>
                </li>
                
            </ul>

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
