import { connect } from 'react-redux'
import { Day as Component } from './day'
import { reserveDay } from '../../store/actions'


const mapDispatchToProps = dispatch => ({
    reserveDay: date => dispatch(reserveDay(date))
})

export const Day = connect(null, mapDispatchToProps)(Component)
