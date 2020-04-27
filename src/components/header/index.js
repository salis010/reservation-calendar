import { connect } from 'react-redux'
import { Header as Component } from './header'
import { setShowMenu } from '../../store/actions'


const mapDispatchToProps = dispatch => ({
    setShowMenu: () => dispatch(setShowMenu(true))
})

export const Header = connect(null, mapDispatchToProps)(Component)
