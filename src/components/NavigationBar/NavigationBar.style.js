import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.nav`
    padding: 20px 0px;
    border-bottom: 2px solid grey;

    .navbar-brand {
        font-size: 2em;
        color: #008CBA;
        cursor: pointer;
    }

    .nav>li>a:focus, .nav>li>a:hover{
        color: #FFEB3B; 
        background-color: red;
    }

    .nav.navbar-nav.navbar-right>li>a:focus, .nav.navbar-nav.navbar-right>li>a:hover{
        background: #ffffff;
    }
`;

export const NavItem = styled(Link)`
    font-size: 1.5em;
    margin-right: 30px;
    cursor: pointer;
    color: #008CBA;
    position: relative;
    padding: 5px 8px;

    &:hover {
        transform: scale(1.15, 1.3);
    }
`;