import { generateDays } from '../utils/generate-days'
import { RESERVE } from './action-types'

const initialState = {
    days: generateDays(30)
}

export const rootReducer = (state = initialState, action) => {
    
    switch(action.type) {

        case RESERVE:
            return state

        default:
            return state

    }

}
