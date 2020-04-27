import React from 'react'
import styled from 'styled-components'

const DayWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: ${props => props.theme.dimensions.cellHeight};
    background-color: ${props => props.reserved ? props.theme.colors.secondary : 'white'};
    border-right: 1px solid ${props => props.theme.colors.secondary};
    border-bottom: 1px solid ${props => props.theme.colors.secondary};
    cursor: pointer;
`

const PDate = styled.p`
    font-size: 1.2rem;
    margin: ${props => props.theme.dimensions.cellMargin};
    color: ${props => props.theme.colors.dateColor};    
`

const Reserved = styled.div`
    display: flex;
    justify-content: center;
`

const P = styled.p`
    font-size: 1.2rem;
    font-style: italic;
    color: ${props => props.theme.colors.dateColor};
`

export const Day = ({ day, reserveDay }) => 
    <DayWrapper 
        onClick={() => reserveDay(day.date)}
        reserved={day.reserved}
    >
        <PDate>{day.date}</PDate>
        {day.reserved && 
            <Reserved>
                <P>Reserved</P>
            </Reserved>
        }
    </DayWrapper>
