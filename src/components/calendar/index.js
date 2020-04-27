import { connect } from 'react-redux'
import { Calendar as Component } from './calendar'

export const mapStateToProps = state => ({
    days: state.days,
})

export const Calendar = connect(mapStateToProps)(Component)
