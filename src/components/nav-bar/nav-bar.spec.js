import { shallowMount } from '@vue/test-utils';
import NavBar from './nav-bar.vue';

describe('NavBar.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(NavBar);

    expect(wrapper.exists()).toEqual(true);
  });
});
