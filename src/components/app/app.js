import React from 'react'
import PropTypes from 'prop-types'
import { Header } from '../header/index'
import { Menu } from '../menu/menu'
import { Calendar } from '../calendar/index'
import { ReservationsList } from '../reservations-list/index'


export const App = ({ isShowMenu, isShowReservationsList }) =>
	<>
		<Header />
		{ isShowMenu && <Menu /> }
		{ isShowReservationsList && <ReservationsList />}
		{ !isShowReservationsList && <Calendar />}
	</>

App.propTypes = {
	isShowMenu: PropTypes.bool.isRequired,
	isShowReservationsList: PropTypes.bool.isRequired,
}
