import { connect } from 'react-redux'
import { setView } from '../actions/view'
import TopMenu from '../components/topMenu'

const getCurrentView = (view) => {
  return view
}

const mapStateToProps = (state) => {
  return {
    view: getCurrentView(state.view)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onViewClick: (view) => {
      dispatch(setView(view))
    }
  }
}

const ActiveTopMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMenu)

export default ActiveTopMenu
