import React from 'react'
import styled from 'styled-components'


const HeaderDayWrapper = styled.div`
    display: flex;
    height: ${props => props.theme.dimensions.cellHeight};
    background-color: ${props => props.theme.colors.primary};
    border-right: 1px solid ${props => props.theme.colors.secondary};
`

const WeekDay = styled.p`
    font-size: 1.6rem;
    font-weight: 800;
    margin: ${props => props.theme.dimensions.cellMargin};
    color: ${props => props.theme.colors.weekDayColor};
`

export const HeaderDay = ({ dayName }) => 
    <HeaderDayWrapper>
        <WeekDay>{dayName}</WeekDay>
    </HeaderDayWrapper>
