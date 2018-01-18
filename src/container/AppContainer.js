import { connect } from 'react-redux';
import App from '../components/App';
import {
  addAction,
  subAction
} from '../actions/counterActions';
import { 
  domainSearchAction, 
  domainSearchClearAction 
} from '../actions/domainSearchActions';

const  mapStateToProps = (state) => ({
  count: state.count,
  isFetching: state.isFetching,
  domainSearch: state.domainSearch
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleAdd: (num) => {
      dispatch(addAction(num));
    },
    handleSub: (num) => {
      dispatch(subAction(num));
    },
    handleDomainSearch: (payload) => {
      dispatch(domainSearchAction(payload));
    },
    handleDomainSearchClear: () => {
      dispatch(domainSearchClearAction());
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);