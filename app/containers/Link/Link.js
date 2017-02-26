import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { scrollToElementId } from '../../actions/scroll'
import styles from './Link.css'

class Link extends React.Component {
  render () {
    const classes = [styles.link]
    if (this.props.isActive) classes.push(styles.active)
    return (
      <span className={classes.join(' ')} onClick={this.props.onClick}>
        {this.props.children}
      </span>
    )
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired
}

export default connect(
  (state, ownProps) => {
    return {
      isActive: state.scroll.targetId === ownProps.to
    }
  },
  (dispatch, ownProps) => {
    return {
      onClick: event => dispatch(scrollToElementId(ownProps.to))
    }
  }
)(Link)
