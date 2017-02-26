import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'

import Menu from '../Menu'

describe('<Menu />', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Menu />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
