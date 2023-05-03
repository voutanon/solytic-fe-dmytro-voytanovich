import { shallowMount } from "@vue/test-utils"
import DefaultLayout from "@/layouts/default.vue"

describe("Check default layout", () => {
  test("Check render Header component", () => {
    const wrapper = shallowMount(DefaultLayout)
    wrapper.setValue({ tokenCookie: '12313'})
    expect(wrapper.find(".c-header")).toBeTruthy()
  })
})