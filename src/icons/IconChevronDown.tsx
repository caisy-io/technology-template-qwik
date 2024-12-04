import { component$ } from "@builder.io/qwik";

export const IconChevronDown = component$<{ class?: string }>((props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class={props.class}
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
});
