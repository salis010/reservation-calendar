import { RESERVE_DAY } from './action-types'
import { generateDays } from '../utils/generate-days'
import { getUpdatedDays } from '../utils/get-updated-days'

const initialState = {
    days: generateDays(30),
    nextReservation: 1,
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

        default:
            return state

    }

}
