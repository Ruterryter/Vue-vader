import { shallowMount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'
import { expect, describe, it } from '@jest/globals'

describe('HelloWorld.vue', () => {
  it('matches the snapshot', () => {
    const msg = 'Hello, Jest and Vue!'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
