import { mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import Link from '../Link'

const mockStore = configureStore([thunk])

describe('<Link />', () => {
  it('should match snapshot', () => {
    const initialState = {
      scroll: {}
    }
    const store = mockStore(initialState)
    const wrapper = mount(
      <Provider store={store}>
        <Link to='elementId' />
      </Provider>
    )
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
