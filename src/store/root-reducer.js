import { RESERVE_DAY, SET_SHOW_MENU } from './action-types'
import { generateDays } from '../utils/generate-days'
import { getUpdatedDays } from '../utils/get-updated-days'


const initialState = {
    days: generateDays(30),
    nextReservation: 1,
    isShowMenu: false,
}

export const rootReducer = (state = initialState, action) => {
    
    switch(action.type) {

        case RESERVE_DAY:            
            const reservation = getUpdatedDays(state.days, action.payload, state.nextReservation)
            return { 
                ...state, 
                days: reservation.updatedDays,
                nextReservation: reservation.nextReservation, 
            }

        case SET_SHOW_MENU:
            return { ...state, isShowMenu: action.payload }

        default:
            return state

    }

}
