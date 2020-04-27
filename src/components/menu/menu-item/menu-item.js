import React from 'react'
import styled from 'styled-components'


const MenuItemP = styled.p`
    font-size: 1.8rem;
    font-weight: 800;
    margin: 2rem;
    color: white;
    cursor: pointer;
`

export const MenuItem = ({ menuItem, setShowReservationsList }) => 
    <MenuItemP onClick={setShowReservationsList}>
        {menuItem.text}
    </MenuItemP>
