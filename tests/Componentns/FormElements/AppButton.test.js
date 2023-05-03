import { shallowMount } from "@vue/test-utils"
import AppButton from "@/components/FormElements/Buttons/AppButton.vue"

describe("Check AppButton component", () => {
  test("Check props", () => {
    const wrapper = shallowMount(AppButton, {
      propsData: { 
        title: 'Title',
        disable: true,
        type: 'submit'
      }
    })
    expect(wrapper.props().title).toBe('Title');
    expect(wrapper.props().disable).toBe(true);
    expect(wrapper.props().type).toBe('submit');
  })
})