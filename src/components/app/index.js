import { connect } from 'react-redux'
import { App as Component } from './app'


const mapStateToProps = state => ({
    isShowMenu: state.isShowMenu,
})

export const App = connect(mapStateToProps)(Component)
