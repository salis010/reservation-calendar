import React from 'react'
import styled from 'styled-components'
import { MenuItem } from './menu-item'
import { MenuHeader } from './menu-header/index'


const MenuTabWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 30rem;
    background-color: black;
    z-index: 3;
` 

const MenuItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const MenuTab = ({ menuItems }) => 
    <MenuTabWrapper>
        <MenuHeader />
        {menuItems.map(menuItems => 
            <MenuItem key={menuItems.id} menuItem={menuItems} /> 
        )}
    </MenuTabWrapper>
