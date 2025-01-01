import { beforeEach, describe, expect, it, vitest } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import AppHeader from "../AppHeader.vue";
import router from '@/router';
import i18n from '@/i18n';
import { useMainStore } from "@/stores/main";
import { createPinia, setActivePinia } from "pinia";

// @vitest-environment jsdom

describe('AppHeader', () => {
    let wrapper : (VueWrapper | null) = null;

    beforeEach(() => {
        setActivePinia(createPinia());
        wrapper = mount(AppHeader, { 
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
                },
            },
        });
    });

    it('renders properly', () => {
        const container = wrapper!.find('.app-header');
        expect(container.element.childNodes.length).toBe(4);
        expect(wrapper!.find('.logo').exists()).toBe(true);
        expect(wrapper!.find('.menu').exists()).toBe(true);
        expect(wrapper!.find('.theme').exists()).toBe(true);
        expect(wrapper!.find('.close-menu').exists()).toBe(true);
        expect(wrapper!.find('.open-menu').exists()).toBe(true);

        const menuItems = wrapper!.findAll('.menu-item');
        expect(menuItems[0].find('a').text()).toBe('Home');
        expect(menuItems[1].find('a').text()).toBe('About');
        expect(menuItems[2].find('a').text()).toBe('Contact');
        expect(menuItems[3].find('.locale').text()).toBe('EN');
        expect(menuItems[4].find('.theme i').html({raw: true})).toBe('<i class="bi bi-sun"></i>');
    });

    it('test mobile menu open', async () => {
        const { closeMenu, openMenu } = useMainStore();

        expect(wrapper!.classes('open')).toBe(false);

        await wrapper!.find('.open-menu').trigger('click');
        expect(openMenu).toHaveBeenCalledOnce();
        expect(wrapper!.classes('open')).toBe(true);

        await wrapper!.find('.close-menu').trigger('click');
        expect(closeMenu).toHaveBeenCalledOnce();
        expect(wrapper!.classes('open')).toBe(false);
    });

    it('test theme', async () => {
        const { theme, toggleTheme } = useMainStore();

        expect(theme.value).toBe('light');

        await wrapper!.find('.theme').trigger('click');
        expect(toggleTheme).toHaveBeenCalledOnce();
        expect(theme.value).toBe('dark');
        expect(document.body.classList.contains('dark-theme')).toBe(true);
        expect(wrapper!.find('.theme i').html({raw: true})).toBe('<i class="bi bi-moon"></i>');

        await wrapper!.find('.theme').trigger('click');
        expect(toggleTheme).toHaveBeenCalledTimes(2);
        expect(theme.value).toBe('light');
        expect(document.body.classList.contains('dark-theme')).toBe(false);
        expect(wrapper!.find('.theme i').html({raw: true})).toBe('<i class="bi bi-sun"></i>');
    });

    it('test menu item home link', async () => {
        // const { upd } = useMainStore();
        const push = vitest.spyOn(router, 'push')
        const menuItems = wrapper!.findAll('.menu-item');

        await wrapper!.find('.logo a').trigger('click');
        expect(push).toHaveBeenCalledTimes(1);
        expect(push).toHaveBeenCalledWith({name: 'home', params: {locale: ''}});

        await menuItems[0].find('a').trigger('click');
        expect(push).toHaveBeenCalledTimes(2);
        expect(push).toHaveBeenCalledWith({name: 'home', params: {locale: ''}});

        // await wrapper!.find('.locale').trigger('click');
        // expect(push).toHaveBeenCalledTimes(3);
        // expect(push).toHaveBeenCalledWith({name: 'home', params: {locale: 'fr'}});
    });

    it('test menu item about link', async () => {
        const push = vitest.spyOn(router, 'push')
        const menuItems = wrapper!.findAll('.menu-item');

        await menuItems[1].find('a').trigger('click');
        expect(push).toHaveBeenCalledTimes(1);
        expect(push).toHaveBeenCalledWith({name: 'about', params: {locale: ''}});
    });

    it('test menu item contact link', async () => {
        const push = vitest.spyOn(router, 'push')
        const menuItems = wrapper!.findAll('.menu-item');

        await menuItems[2].find('a').trigger('click');
        expect(push).toHaveBeenCalledTimes(1);
        expect(push).toHaveBeenCalledWith({name: 'contact', params: {locale: ''}});
    });
});