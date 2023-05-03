import { shallowMount, mount } from "@vue/test-utils"
import IconTextInput from "@/components/FormElements/Inputs/IconTextInput.vue"

describe("Check IconTextInput component", () => {
  test("Check props", () => {
    const wrapper = shallowMount(IconTextInput, {
      propsData: { 
        modelValue: 'test@test.com',
        icon: 'icon',
        placeholder: 'placeholder',
        type: 'password',
        errorMessage: 'errorMessage'
      }
    })
    expect(wrapper.props().modelValue).toBe('test@test.com');
    expect(wrapper.props().icon).toBe('icon');
    expect(wrapper.props().placeholder).toBe('placeholder');
    expect(wrapper.props().type).toBe('password');
    expect(wrapper.props().errorMessage).toBe('errorMessage');
  })
  
  test("Check render errorMessage", () => {
    const wrapper = mount(IconTextInput, {
      props: {
        modelValue: 'test@test.com',
        icon: 'icon',
        placeholder: 'placeholder',
        errorMessage: 'errorMessage'
      }
    })
    expect(wrapper.text()).toContain('errorMessage')
  })
})