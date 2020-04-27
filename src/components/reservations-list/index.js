import { connect } from 'react-redux'
import { setShowReservationsList }  from '../../store/actions'
import { ReservationsList as Component } from './reservations-list'


const mapStateToProps = state => ({
    days: state.days,
})

const mapDispatchToProps = dispatch => ({
    setShowReservationsList: () => dispatch(setShowReservationsList(false))
})

export const ReservationsList = connect(mapStateToProps, mapDispatchToProps)(Component)
