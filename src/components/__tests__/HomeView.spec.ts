import i18n from "@/i18n";
import router from "@/router";
import HomeView from "@/views/HomeView.vue";
import { createTestingPinia } from "@pinia/testing";
import { mount, type VueWrapper } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import AppHeader from "../AppHeader.vue";
import SocialMedia from "../SocialMedia.vue";
import { useMainStore } from "@/stores/main";
import { useI18n } from "vue-i18n";


describe('HomeView', () => {
    let wrapper : (VueWrapper | null) = null;

    beforeEach(async () => {
        setActivePinia(createPinia());

        wrapper = mount(HomeView, { 
            global: { 
                plugins: [
                    router, 
                    i18n,
                    createTestingPinia({
                        createSpy: vitest.fn,
                        stubActions: false,
                    })
                ],
                mocks: {
                    t: (msg: string) => msg
                }          
            },
        });

        router.push('/')
        await router.isReady()      
    });

    it('renders properly', () => {
        expect(wrapper!.findComponent(AppHeader).exists()).toBe(true);
        expect(wrapper!.findComponent(SocialMedia).exists()).toBe(true);
        expect(wrapper!.find('.app-main').exists()).toBe(true);
        expect(wrapper!.find('.main-title').exists()).toBe(true);
        expect(wrapper!.find('.main-title').text()).toBe('I am {fullname}');
        expect(wrapper!.find('.main-text').exists()).toBe(true);
        expect(wrapper!.find('.main-text').text()).toBe('home.description');
        expect(wrapper!.find('.about-link').exists()).toBe(true);
        expect(wrapper!.find('.about-link a').exists()).toBe(true);
        expect(wrapper!.find('.about-link a').text()).toBe('See more');
        expect(wrapper!.find('.open-menu').exists()).toBe(true);
    });

    it('test homeview mobile visibilty', async () => {
        const { open, openMenu, closeMenu } = useMainStore();
        expect(open.value).toBe(false);

        await wrapper!.find('.open-menu').trigger('click');
        expect(openMenu).toHaveBeenCalledOnce();
        expect(open.value).toBe(true);
        expect(wrapper!.find('.app-main').exists()).toBe(false);

        await wrapper!.find('.close-menu').trigger('click');
        expect(closeMenu).toHaveBeenCalledOnce();
        expect(open.value).toBe(false);
        expect(wrapper!.find('.app-main').exists()).toBe(true);
    });

    it('test about link', async () => {
        const push = vitest.spyOn(router, 'push')

        await wrapper!.find('.about-link a').trigger('click');
        expect(push).toHaveBeenCalledTimes(1);
        expect(push).toHaveBeenCalledWith({name: 'about', params: {locale: ''}});
    });

});