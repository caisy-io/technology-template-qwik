import { component$, useStylesScoped$ } from "@builder.io/qwik";

interface Props {
    class?: string;
    onClick$?: (e: Event) => void;
}

const MenuIcon = component$((props: Props) => {
    useStylesScoped$(`
    .xnav-close-icon {
      display: none;
    }
    .xnav-toggle.hidden {
      display: none;
    }
  `);

    return (
        <button id="xnav-menu" aria-label="Toggle Menu" onClick$={props.onClick$}>
            <svg
                fill="currentColor"
                class={props.class}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Toggle Menu</title>
                <path
                    class="xnav-close-icon xnav-toggle hidden"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
                ></path>
                <path
                    class="xnav-open-icon xnav-toggle"
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                ></path>
            </svg>
        </button>
    );
});

export default MenuIcon;
