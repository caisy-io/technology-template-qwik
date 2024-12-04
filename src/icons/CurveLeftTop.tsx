import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="31"
            fill="none"
            viewBox="0 0 128 31"
            class="h-full w-full"
        >
            <path
                fill="#fff"
                fill-opacity="0.1"
                fill-rule="evenodd"
                d="M0 .5C0 16.792 13.208 30 29.5 30H128v1H29.5C15.342 31 3.438 21.354 0 8.276V.5z"
                clip-rule="evenodd"
            />
        </svg>
    );
});
