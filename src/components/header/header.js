import React from 'react'
import styled from 'styled-components'
import menu from '../../images/menu.png'


const HeaderWrapper = styled.header`
    background-color: black;
`

const Img = styled.img`
    margin: 1rem;
    cursor: pointer;
`

export const Header = ({ setShowMenu }) => 
    <HeaderWrapper>
        <Img onClick={setShowMenu} src={menu} alt='Menu' />
    </HeaderWrapper>
    