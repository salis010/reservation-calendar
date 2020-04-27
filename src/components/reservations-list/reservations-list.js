import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getReservations } from '../../utils/get-reservations'


const ReservationsListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const P = styled.p`
    font-size: 1.6rem;
    font-weight: 800;
    margin: 2rem 0;
    color: ${props => props.theme.colors.dateColor};
`

const Button = styled.button`
    font-size: 1.6rem;
    font-weight: 800;
    width: 14rem;
    height: 3.4rem;
    color: white;
    background-color: ${props => props.theme.colors.secondary};
    border: none;
    cursor: pointer;
`

export const ReservationsList = ({ days, setShowReservationsList }) => {
    
    const reservationDays = getReservations(days)

    return (
        <ReservationsListWrapper>
            {reservationDays.length > 0 ? 
                reservationDays.map(day => <P key={day.date}>{day.date} May 2020</P>)
                :
                <P>No reservations</P>
            }
            <Button onClick={setShowReservationsList} >Close</Button>
        </ReservationsListWrapper>
    )
}

ReservationsList.propTypes = {
    days: PropTypes.array.isRequired,
    setShowReservationsList: PropTypes.func.isRequired,
}
