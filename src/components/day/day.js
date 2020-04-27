import React from 'react'
import styled from 'styled-components'

const DayWrapper = styled.div`
    display: flex;
    height: ${props => props.theme.dimensions.cellHeight};
    border-right: 1px solid ${props => props.theme.colors.secondary};
    border-bottom: 1px solid ${props => props.theme.colors.secondary};
    cursor: pointer;
`

const DayCell = styled.p`
    font-size: 1.2rem;
    margin: ${props => props.theme.dimensions.cellMargin};
    color: ${props => props.theme.colors.dateColor};    
`

export const Day = ({ date }) => 
    <DayWrapper>
        <DayCell>{date}</DayCell>
    </DayWrapper>
