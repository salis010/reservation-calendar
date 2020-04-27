import { 
    RESERVE_DAY, 
    SET_SHOW_MENU, 
    SET_SHOW_RESERVATIONS_LIST 
} from './action-types'


export const reserveDay = day => ({ type: RESERVE_DAY, payload: day })
export const setShowMenu = isShowMenu => ({ type: SET_SHOW_MENU, payload: isShowMenu })
export const setShowReservationsList = isShowReservationsList => ({ type: SET_SHOW_RESERVATIONS_LIST, payload: isShowReservationsList })
