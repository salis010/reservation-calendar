import { RESERVE_DAY, SET_SHOW_MENU } from './action-types'


export const reserveDay = day => ({ type: RESERVE_DAY, payload: day })
export const setShowMenu = isShowMenu => ({ type: SET_SHOW_MENU, payload: isShowMenu })
