import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import SocialMedia from "../SocialMedia.vue";

describe('SocialMedia', () => {
    it('renders properly', () => {
        const wrapper = mount(SocialMedia);
        const Links = wrapper.find('.social-media-links');
        expect(Links.element.childNodes.length).toBe(2);
    });

    it('renders properly - 1st link', () => {
        const wrapper = mount(SocialMedia);
        const LinkItems = wrapper.findAll('.social-media-links .media-item');
        expect(LinkItems.length).toBe(2);
        expect(LinkItems[0].element.innerHTML).toContain('https://www.linkedin.com/in/amine-errafii-a575019b');
        expect(LinkItems[0].element.innerHTML).toContain('<i class="bi bi-linkedin"></i>');
        expect(LinkItems[0].findAll('[target="_blank"]').length).toBe(1);
    });

    it('renders properly - 2nd link', () => {
        const wrapper = mount(SocialMedia);
        const LinkItems = wrapper.findAll('.social-media-links .media-item');
        expect(LinkItems.length).toBe(2);
        expect(LinkItems[1].element.innerHTML).toContain('https://github.com/amine01993');
        expect(LinkItems[1].element.innerHTML).toContain('<i class="bi bi-github"></i>');
        expect(LinkItems[1].findAll('[target="_blank"]').length).toBe(1);

    });
});