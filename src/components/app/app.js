import React from 'react'
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
