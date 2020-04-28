import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const HeaderDayWrapper = styled.div`
    display: flex;
    height: ${props => props.theme.dimensions.headerCellHeightMobile};
    background-color: ${props => props.theme.colors.primary};
    border-right: 1px solid ${props => props.theme.colors.secondary};

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        height: ${props => props.theme.dimensions.headerCellHeight};
    }
`

const WeekDay = styled.p`
    font-size: 0.8rem;
    font-weight: 800;
    margin: ${props => props.theme.dimensions.cellMargin};
    color: ${props => props.theme.colors.weekDayColor};

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        font-size: 1.6rem;
    }
`

export const HeaderDay = ({ dayName }) => 
    <HeaderDayWrapper>
        <WeekDay>{dayName}</WeekDay>
    </HeaderDayWrapper>

HeaderDay.propTypes = {
    dayName: PropTypes.string.isRequired,
}
