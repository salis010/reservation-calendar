import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const DayWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: ${props => props.theme.dimensions.cellHeightMobile};
    background-color: ${props => props.reserved ? props.theme.colors.secondary : 'white'};
    border-right: 1px solid ${props => props.theme.colors.secondary};
    border-bottom: 1px solid ${props => props.theme.colors.secondary};
    cursor: pointer;

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        height: ${props => props.theme.dimensions.cellHeight};
    }
`

const PDate = styled.p`
    font-size: 1.2rem;
    margin: ${props => props.theme.dimensions.cellMargin};
    color: ${props => props.theme.colors.dateColor};    
`

const Reserved = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1rem;
    margin: 0 0 0 0.7rem;

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        margin: 0;
        max-width: 100%;
    }
`

const P = styled.p`
    font-size: 0.8rem;
    font-style: italic;    
    transform: rotate(-90deg);
    color: ${props => props.theme.colors.dateColor};

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        font-size: 1.2rem;
        writing-mode: horizontal-rl;
        transform: rotate(0);
    }
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

Day.propTypes = {
    day: PropTypes.object.isRequired,
    reserveDay: PropTypes.func.isRequired,
}
