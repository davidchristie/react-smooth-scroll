import React, { PropTypes } from 'react'

import styles from './Section.css'

export default class Section extends React.Component {
  render () {
    return (
      <section
        className={styles.section}
        id={this.props.id}
        style={this.props.style}
      >
        {this.props.children}
      </section>
    )
  }
}

Section.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object
}
