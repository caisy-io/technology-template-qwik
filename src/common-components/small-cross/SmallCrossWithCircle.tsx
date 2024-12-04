import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <span class="slate-200 absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[1px] border-solid">
            <div class="inline-flex items-center justify-center rounded-full border-[2px] border-solid border-white bg-slate-200 p-[2px] silver:border-[3px] silver:p-[3px]">
                <div class="relative h-[5px] w-[5px] silver:h-[7px] silver:w-[7px]">
                    <div class="absolute inset-0 flex justify-center">
                        <div class="absolute h-full w-[1px] bg-slate-400"></div>
                    </div>
                    <div class="absolute inset-0 flex items-center">
                        <div class="absolute h-[1px] w-full bg-slate-400"></div>
                    </div>
                </div>
            </div>
        </span>
    );
});
