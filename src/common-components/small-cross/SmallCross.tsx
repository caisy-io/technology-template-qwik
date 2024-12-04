import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <span class="relative">
            <span class="absolute -left-[3px] -top-[1px] block h-[1px] w-[7px] rotate-90 transform bg-white"></span>
            <span class="absolute -left-[3px] -top-[1px] block h-[1px] w-[7px] transform bg-white"></span>
        </span>
    );
});
