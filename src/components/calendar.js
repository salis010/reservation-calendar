import React from 'react'
import styled from 'styled-components'
import { HeaderDay } from './header-day'
import { Day } from './day/day'

const CalendarGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-items: space;
    align-items: start;
`

const dayNames = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']

const getMonthDays = n => {
    const days = []

    for(let i = 1; i <= n; i++) {
        days.push(<Day key={i} date={i} />)
    }

    return days
}

export const Calendar = () => 
    <CalendarGrid>
        {dayNames.map(day => <HeaderDay key={day} dayName={day} />)}
        {getMonthDays(30)}
    </CalendarGrid>
