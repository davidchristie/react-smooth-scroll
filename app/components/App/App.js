import React from 'react'

import Link from '../../containers/Link'
import Menu from '../Menu'
import Section from '../Section'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Menu>
          <Link to='section1'>Section 1</Link><br />
          <Link to='section2'>Section 2</Link><br />
          <Link to='section3'>Section 3</Link><br />
          <Link to='section4'>Section 4</Link><br />
          <Link to='section5'>Section 5</Link>
        </Menu>
        <Section id='section1' style={{backgroundColor: '#96ceb4'}}>
          <h1>Section 1</h1>
        </Section>
        <Section id='section2' style={{backgroundColor: '#ffeead'}}>
          <h1>Section 2</h1>
        </Section>
        <Section id='section3' style={{backgroundColor: '#ff6f69'}}>
          <h1>Section 3</h1>
        </Section>
        <Section id='section4' style={{backgroundColor: '#ffcc5c'}}>
          <h1>Section 4</h1>
        </Section>
        <Section id='section5' style={{backgroundColor: '#88d8b0'}}>
          <h1>Section 5</h1>
        </Section>
      </div>
    )
  }
}
