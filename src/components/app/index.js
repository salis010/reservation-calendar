import { connect } from 'react-redux'
import { App as Component } from './app'


const mapStateToProps = state => ({
    isShowMenu: state.isShowMenu,
    isShowReservationsList: state.isShowReservationsList,
})

export const App = connect(mapStateToProps)(Component)
