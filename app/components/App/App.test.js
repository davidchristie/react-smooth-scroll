import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'

import App from '../App'

describe('<App />', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<App />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
