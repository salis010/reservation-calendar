import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import close from '../../../images/close.png'


const MenuHeaderWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
    margin-right: 2rem;
`

const Img = styled.img`
    cursor: pointer;
`

export const MenuHeader = ({ setShowMenu }) =>
    <MenuHeaderWrapper>
        <Img onClick={() => setShowMenu()} src={close} alt='Close' />
    </MenuHeaderWrapper>

MenuHeader.propTypes = {
    setShowMenu: PropTypes.func.isRequired,
}
