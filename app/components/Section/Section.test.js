import { shallow } from 'enzyme'
import React from 'react'

import Section from '../Section'

describe('<Section />', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Section />)
    expect(wrapper.getNodes()).toMatchSnapshot()
  })
})
