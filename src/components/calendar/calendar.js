import React from 'react'
import styled from 'styled-components'
import { HeaderDay } from '../header-day'
import { Day } from '../day/day'

const CalendarGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-items: space;
    align-items: start;
`

const dayNames = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']

export const Calendar = ({ days }) => 
    <CalendarGrid>
        {dayNames.map(day => <HeaderDay key={day} dayName={day} />)}
        {days.map(day =>
            <Day key={day.date} date={day.date} />
        )}
    </CalendarGrid>
