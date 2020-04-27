import { connect } from 'react-redux'
import { setShowMenu }  from '../../../store/actions'
import { Blank as Component } from './blank'


const mapDispatchToProps = dispatch => ({
    setShowMenu: () => dispatch(setShowMenu(false))
})

export const Blank = connect(null, mapDispatchToProps)(Component)
