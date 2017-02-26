import React from 'react'

import styles from './Menu.css'

export default class Menu extends React.Component {
  render () {
    return (
      <div className={styles.menu}>
        {this.props.children}
      </div>
    )
  }
}
