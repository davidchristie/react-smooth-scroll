import React from 'react'

import Section from '../Section'

export default class App extends React.Component {
  render () {
    return (
      <div>
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
