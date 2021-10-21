import { mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import Navbar from "@/components/Navbar.vue";

const wrapper = mount(Navbar);
expect(wrapper.html()).to("<div><p>Navbar</p></div>");
