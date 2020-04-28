import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import menu from '../../images/menu.png'


const HeaderWrapper = styled.header`
    background-color: black;
`

const Img = styled.img`
    margin: 0.3rem;
    cursor: pointer;

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        margin: 1rem;
    }
`

export const Header = ({ setShowMenu }) => 
    <HeaderWrapper>
        <Img onClick={setShowMenu} src={menu} alt='Menu' />
    </HeaderWrapper>
    
Header.propTypes = {
    setShowMenu: PropTypes.func.isRequired,
}
