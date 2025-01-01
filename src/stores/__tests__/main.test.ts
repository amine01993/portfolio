import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, expectTypeOf, it } from "vitest";
import { useMainStore } from "../main";


describe('test main store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('test mobile header close/open - init', () => {
        const { open } = useMainStore();
        expectTypeOf(open.value).toEqualTypeOf<boolean>();
        expect(open.value).toBe(false);
    });

    it('test mobile header close/open - open menu', () => {
        const { open, openMenu } = useMainStore();
        expectTypeOf(open.value).toEqualTypeOf<boolean>();
        openMenu();
        expect(open.value).toBe(true);
    });

    it('test mobile header close/open - close menu', () => {
        const { open, closeMenu } = useMainStore();
        expectTypeOf(open.value).toEqualTypeOf<boolean>();
        closeMenu();
        expect(open.value).toBe(false);
    });
});