import React from 'react'
import styled from 'styled-components'
import { MenuTab } from './menu-tab'
import { Blank } from './blank/index'


const MenuWrapper = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1;
`

export const Menu = () => 
    <MenuWrapper>
        <Blank />
        <MenuTab menuItems={[{ id: 0, text: 'Reservations' }]}/>        
    </MenuWrapper>
