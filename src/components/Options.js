import React, { Component } from "react";
import { connect } from "react-redux";
import { setDiff } from "../actions";

class Option extends Component {
  render() {
    return (
      <div>
        <input
          type="number"
          value={this.props.diff}
          // onChange={this.props.store.dispatch({type: SET_DIFF})}
          onChange={e => this.props.changeDiff(e.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    diff: state.diff
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeDiff: diffValue => dispatch(setDiff(diffValue))
  };
};

Option = connect(mapStateToProps, mapDispatchToProps)(Option);
export default Option;
