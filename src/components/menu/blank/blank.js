import React from 'react'
import styled from 'styled-components'


const BlankWrapper = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: RGB(0, 0, 0, 0.4);
    z-index: 2;
`

export const Blank = ({ setShowMenu }) => 
    <BlankWrapper onClick={setShowMenu} />
