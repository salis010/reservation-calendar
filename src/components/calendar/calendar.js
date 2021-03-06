import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { HeaderDay } from './header-day'
import { Day } from './day/index'


const CalendarGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-items: space;
    align-items: start;
`

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const Calendar = ({ days }) => 
    <CalendarGrid>
        {dayNames.map(day => <HeaderDay key={day} dayName={day} />)}
        {days.map(day =>
            <Day key={day.date} day={day} />
        )}
    </CalendarGrid>

Calendar.propTypes = {
    days: PropTypes.array.isRequired,
}
