import { connect } from 'react-redux'
import { setView } from '../actions/view'
import Main from '../components/main'

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

const ActiveMain = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default ActiveMain
