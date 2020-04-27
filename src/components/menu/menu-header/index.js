import { connect } from 'react-redux'
import { MenuHeader as Component } from './menu-header'
import { setShowMenu } from '../../../store/actions'


const mapDispatchToProps = dispatch => ({
    setShowMenu: () => dispatch(setShowMenu(false))
})

export const MenuHeader = connect(null, mapDispatchToProps)(Component)
