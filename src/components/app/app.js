import React from 'react'
import { Header } from '../header/index'
import { Menu } from '../menu/menu'
import { Calendar } from '../calendar/index'


export const App = ({ isShowMenu }) =>
	<>
		<Header />
		{ isShowMenu && <Menu /> }
		<Calendar />
	</>
