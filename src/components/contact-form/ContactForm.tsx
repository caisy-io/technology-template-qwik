/* eslint-disable qwik/loader-location */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Botpoison from "@botpoison/browser";
import { $, component$, useSignal, type QRL } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import RichTextRenderer from "@caisy/rich-text-qwik-renderer";
import type { SubmitHandler } from "@modular-forms/qwik";
import { useForm, valiForm$ } from "@modular-forms/qwik";
import * as v from "valibot";
import { inViewFade } from "~/constants/animationInView";
import Button from "../../common-components/button/Button";
import DarkBackground from "../../common-components/dark-background/DarkBackground";
import FancyImage from "../../common-components/fancy-image/FancyImage";
import LineMiddle from "../../common-components/line-parts/LineMiddle";
import LinesBackground from "../../common-components/line-parts/LinesBackground";
import LinesBottom from "../../common-components/line-parts/LinesBottom";
import LinesTop from "../../common-components/line-parts/LinesTop";
import Cross from "../../common-components/small-cross/Cross";
import { gridLayout, gridMaxWidth, gridPadding } from "../../constants/grid";
import { useCurrentLocale } from "../../hooks/useCurrentLocale";
import type { IGenContactForm } from "../../services/graphql/__generated/sdk";
import { cn } from "../../utils/tailwind-helper";

// check out https://botpoison.com/ for a free bot protection service that integrates well with https://formspark.io/
const botpoison = new Botpoison({
    publicKey: import.meta.env.PUBLIC_BOTPOISON_KEY,
});
export interface ContactFromProps extends IGenContactForm {
    componentIndex: number;
}

// check out https://formspark.io/ for a free form submission service
const BASE_URL = "https://submit-form.com";
const formId = import.meta.env.PUBLIC_FORMSPARK_ID;

export const useFormLoader = routeLoader$<any>(() => ({
    name: "",
    email: "",
    message: "",
    company: "",
    tel: "",
    policy: false,
}));

export const ContactForm = component$<ContactFromProps>((props) => {
    const { text, privacyPolicyText, linkingImages, headline, formDescription, componentIndex } = props;
    const submitting = useSignal(false);
    const alreadySubmitted = useSignal(false);
    const locale = useCurrentLocale();

    const translations = {
        de: {
            name: "Name",
            message: "Nachricht",
            email: "Email",
            company: "Unternehmen",
            tel: "Telefon",
            send: "Senden",
            submitting: "Senden...",
            thankYou: "Vielen Dank für Ihre Anfrage",
            messagePlaceholder: "Ihre Nachricht",
            validation: {
                enterYourName: "Bitte geben Sie Ihren Namen ein.",
                enterYourEmail: "Bitte geben Sie Ihre E-Mail-Adresse ein.",
                enterValidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
                enterYourMessage: "Bitte geben Sie Ihre Nachricht ein.",
                messageTooShort: "Die Nachricht ist zu kurz.",
                enterYourCompany: "Bitte geben Sie Ihren Firmennamen ein.",
                acceptPrivacyPolicy: "Bitte akzeptieren Sie die Datenschutzerklärung.",
            },
        },
        en: {
            name: "Name",
            message: "Message",
            email: "Email",
            company: "Company",
            tel: "Telephone",
            send: "Send",
            messagePlaceholder: "Your request",
            submitting: "Submitting...",
            thankYou: "Thank you for your submission",
            validation: {
                enterYourName: "Please enter your name.",
                enterYourEmail: "Please enter your email.",
                enterValidEmail: "Please enter a valid email.",
                enterYourMessage: "Please enter your message.",
                messageTooShort: "Message is too short.",
                enterYourCompany: "Please enter your company name.",
                acceptPrivacyPolicy: "Please accept the privacy policy.",
            },
        },
    };

    const [formInstance, { Form, Field }] = useForm<any>({
        validate: valiForm$(() => {
            // Create schema inside the validation function
            const schema = v.object({
                name: v.pipe(v.string(), v.nonEmpty(translations[locale].validation.enterYourName)),
                email: v.pipe(
                    v.string(),
                    v.nonEmpty(translations[locale].validation.enterYourEmail),
                    v.email(translations[locale].validation.enterValidEmail),
                ),
                message: v.pipe(
                    v.string(),
                    v.nonEmpty(translations[locale].validation.enterYourMessage),
                    v.minLength(50, translations[locale].validation.messageTooShort),
                ),
                company: v.pipe(v.string(), v.nonEmpty(translations[locale].validation.enterYourCompany)),
                tel: v.string(),
                policy: v.pipe(
                    v.boolean(),
                    v.custom((value) => value === true, translations[locale].validation.acceptPrivacyPolicy),
                ),
            });

            return schema;
        }),
        loader: useFormLoader(),
    } as any);

    const handleSubmit: QRL<SubmitHandler<any>> = $(async (values, event) => {
        submitting.value = true;
        const { solution } = await botpoison.challenge();

        const url = `${BASE_URL}/${formId}`;
        const method = "POST";
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
        const body = JSON.stringify({ ...values, _botpoison: solution });
        fetch(url, {
            method,
            headers,
            body,
        })
            .then(async (response) => {
                const status = response.status;
                if (status === 200) {
                    alreadySubmitted.value = true;
                }
                const text = await response.text();
                const jsonObj = JSON.parse(text);
                return jsonObj;
            })
            .catch((error) => {
                console.log("submitContactForm error:", error);
            })
            .finally(() => {
                submitting.value = false;
            });
    });

    const theme = "dark";
    const fieldClasses = "gold:p-6 silver:p-4 p-2 flex flex-col gap-2 border-t border-solid border-slate-600 relative";
    const fieldLabelClasses = ["text-slate-300 text-xs font-montserrat tracking-[-0.12px] uppercase "];
    const localization = translations[locale] || translations.en;

    return (
        <div class="contactform relative overflow-hidden">
            <DarkBackground />
            <LinesTop leftRound={false} theme={theme} />
            <LineMiddle theme={theme} class="z-20" />
            <div class={cn(gridPadding, "text-white")}>
                <div data-animate={componentIndex > 0} class={cn(gridMaxWidth, gridLayout, "h-full", inViewFade)}>
                    <div class="relative z-30 col-span-4 col-start-1 row-start-2 -mx-1.5 h-full justify-center silver:col-span-6 silver:col-start-2 silver:-mx-5 gold:col-span-5 gold:col-start-2 gold:row-start-1 gold:-mr-2.5">
                        <div class="prose prose-invert relative px-2 py-4 gold:prose-xl silver:px-4 silver:py-6 gold:px-6 gold:py-8">
                            <h1
                                class={cn([
                                    "font-montserrat text-4xl font-semibold leading-normal tracking-[-0.36px] text-white",
                                    "silver:text-[42px] silver:tracking-[-0.42px]",
                                    "gold:text-5xl gold:tracking-[-0.48px]",
                                ])}
                            >
                                {headline}
                            </h1>
                            {formDescription?.json && (
                                <div>
                                    <RichTextRenderer node={formDescription.json} />
                                </div>
                            )}
                            <span class="absolute bottom-0 left-0">
                                <Cross theme="dark" />
                            </span>
                            <span class="absolute bottom-0 right-0">
                                <Cross theme="dark" />
                            </span>
                        </div>
                        <Form onSubmit$={handleSubmit} class="">
                            <div class="grid grid-cols-2 gap-0">
                                <Field name="company">
                                    {(field, props) => (
                                        <div class={cn(fieldClasses)}>
                                            <label class={cn(fieldLabelClasses)} for="company">
                                                {localization.company}
                                            </label>
                                            <input
                                                class="bg-transparent leading-6 text-white outline-none"
                                                {...props}
                                                type="text"
                                                required
                                            />
                                            {field?.error && (
                                                <div class="font-montserrat uppercase text-red-300">{field.error}</div>
                                            )}
                                            <span class="absolute bottom-0 left-0">
                                                <Cross theme="dark" />
                                            </span>
                                        </div>
                                    )}
                                </Field>
                                <Field name="email">
                                    {(field, props) => (
                                        <div class={cn(fieldClasses, "border-l")}>
                                            <label class={cn(fieldLabelClasses)} for="email">
                                                {localization.email}
                                            </label>
                                            <input
                                                {...props}
                                                class="bg-transparent leading-6 text-white outline-none"
                                                type="email"
                                                required
                                            />
                                            <span class="absolute left-0 top-0">
                                                <Cross theme="dark" />
                                            </span>
                                            <span class="absolute bottom-0 left-0">
                                                <Cross theme="dark" />
                                            </span>
                                            <span class="absolute bottom-0 right-0">
                                                <Cross theme="dark" />
                                            </span>
                                            {field?.error && (
                                                <div class="font-montserrat uppercase text-red-300">{field.error}</div>
                                            )}
                                        </div>
                                    )}
                                </Field>
                                <Field name="tel">
                                    {(field, props) => (
                                        <div class={cn(fieldClasses)}>
                                            <label class={cn(fieldLabelClasses)} for="tel">
                                                {localization.tel}
                                            </label>
                                            <input
                                                {...props}
                                                class="bg-transparent leading-6 text-white outline-none"
                                                type="text"
                                                required
                                            />
                                            <span class="absolute bottom-0 left-0">
                                                <Cross theme="dark" />
                                            </span>
                                            {field?.error && (
                                                <div class="font-montserrat uppercase text-red-300">{field.error}</div>
                                            )}
                                        </div>
                                    )}
                                </Field>
                                <Field name="name">
                                    {(field, props) => (
                                        <div class={cn(fieldClasses, "border-l")}>
                                            <label for="name" class={cn(fieldLabelClasses)}>
                                                {localization.name}
                                            </label>
                                            <input
                                                {...props}
                                                class="bg-transparent leading-6 text-white outline-none"
                                                type="text"
                                                required
                                            />
                                            <span class="absolute bottom-0 left-0">
                                                <Cross theme="dark" />
                                            </span>
                                            <span class="absolute bottom-0 right-0">
                                                <Cross theme="dark" />
                                            </span>
                                            {field?.error && (
                                                <div class="font-montserrat uppercase text-red-300">{field.error}</div>
                                            )}
                                        </div>
                                    )}
                                </Field>
                                <Field name="message">
                                    {(field, props) => {
                                        const textareaProps = {
                                            ...props,
                                            value: field.value,
                                            placeholder: localization.messagePlaceholder,
                                        };
                                        return (
                                            <div class={cn(fieldClasses, "col-span-2")}>
                                                <label class={cn(fieldLabelClasses)} for="message">
                                                    Message
                                                </label>
                                                <textarea
                                                    {...textareaProps}
                                                    class="max-h-60 min-h-20 overflow-y-auto bg-transparent align-top leading-6 text-white outline-none"
                                                    required
                                                    onInput$={(event, el) => {
                                                        const target = event.target as HTMLTextAreaElement;
                                                        target.style.height = "auto";
                                                        target.style.height = `${target.scrollHeight}px`;
                                                        props.onInput$(event, el);
                                                    }}
                                                />
                                                <span class="absolute bottom-0 left-0">
                                                    <Cross theme="dark" />
                                                </span>
                                                <span class="absolute bottom-0 right-0">
                                                    <Cross theme="dark" />
                                                </span>
                                                {field?.error && (
                                                    <div class="font-montserrat uppercase text-red-300">
                                                        {field.error}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    }}
                                </Field>
                                <Field name="policy" type="boolean">
                                    {(field, props) => (
                                        <div class={cn(fieldClasses, "col-span-2")}>
                                            <div class="flex gap-2 text-slate-300">
                                                <input
                                                    {...props}
                                                    type="checkbox"
                                                    name="policy"
                                                    class="bg-slate-300 text-slate-300 accent-primary-500"
                                                />
                                                <label for="policy" class={cn("inline-flex")}>
                                                    {privacyPolicyText?.json ? (
                                                        <span
                                                            class={cn([
                                                                "text-sm font-normal leading-5 tracking-normal text-slate-300",
                                                            ])}
                                                        >
                                                            <RichTextRenderer node={privacyPolicyText?.json} />
                                                        </span>
                                                    ) : (
                                                        ""
                                                    )}
                                                </label>
                                            </div>
                                            <span class="absolute bottom-0 left-0">
                                                <Cross theme="dark" />
                                            </span>
                                            <span class="absolute bottom-0 right-0">
                                                <Cross theme="dark" />
                                            </span>
                                            {field?.error && (
                                                <div class="font-montserrat uppercase text-red-300">{field.error}</div>
                                            )}
                                        </div>
                                    )}
                                </Field>
                                <div class="col-span-2">
                                    {submitting.value ? (
                                        <div class={cn(fieldClasses, "border-none")}>
                                            <div class={cn(fieldLabelClasses, "text-xl")}>
                                                {localization.submitting}
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            {alreadySubmitted.value ? (
                                                <div class={cn(fieldClasses, "border-none")}>
                                                    <div class={cn(fieldLabelClasses, "text-xl")}>
                                                        {localization.thankYou}
                                                    </div>
                                                </div>
                                            ) : (
                                                <>
                                                    <div class="flex justify-center">
                                                        <Button
                                                            fullStripe={true}
                                                            class={cn("w-full")}
                                                            htmlType={"submit"}
                                                            disabled={submitting.value}
                                                            type={"special"}
                                                            label={localization.send}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </Form>
                    </div>
                    <div class="relative z-30 col-span-4 col-start-1 -mx-1.5 h-full justify-center silver:col-span-6 silver:col-start-2 silver:-mx-5 gold:col-span-5 gold:col-start-7 gold:row-start-1 gold:-ml-2.5">
                        <div class="">
                            <div class="px-2 py-4 silver:px-4 silver:py-6 gold:px-6 gold:py-8">
                                {text?.json && (
                                    <div>
                                        <div class="prose prose-invert w-full gold:prose-xl">
                                            <RichTextRenderer node={text?.json} />
                                        </div>
                                    </div>
                                )}
                            </div>
                            {linkingImages && linkingImages.length > 0 && (
                                <>
                                    <div class="relative flex flex-row justify-center gap-4 border-t border-solid border-slate-600 p-2 silver:p-4 gold:gap-6 gold:p-6">
                                        <span class="absolute left-0 top-0">
                                            <Cross theme="dark" />
                                        </span>
                                        <span class="absolute right-0 top-0">
                                            <Cross theme="dark" />
                                        </span>
                                        {linkingImages.map((li, index) => {
                                            if (!li?.image) return null;

                                            return (
                                                <div class="w-1/2" key={li?.id || index}>
                                                    {li?.linkAddress ? (
                                                        <a href={li?.linkAddress} target="_blank">
                                                            <FancyImage
                                                                img={li.image}
                                                                responsiveAspectRatio={{ bronze: 1 }}
                                                            />
                                                        </a>
                                                    ) : (
                                                        <>
                                                            <FancyImage
                                                                img={li?.image}
                                                                responsiveAspectRatio={{ bronze: 1 }}
                                                            />
                                                        </>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <LinesBackground theme={theme} />
            <LinesBottom theme={theme} bottomRight={false} />
        </div>
    );
});
