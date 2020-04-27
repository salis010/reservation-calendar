import { connect } from 'react-redux'
import { MenuItem as Component } from './menu-item'
import { setShowMenu } from '../../../store/actions'
import { setShowReservationsList }  from '../../../store/actions'


const mapDispatchToProps = dispatch => ({
    setShowReservationsList: () => [
        dispatch(setShowMenu(false)),
        dispatch(setShowReservationsList(true))
    ],
})

export const MenuItem = connect(null, mapDispatchToProps)(Component)
