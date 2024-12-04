// export const inViewSlideUp = `[&.in-view]:motion-duration-[850ms] [&.in-view]:motion-preset-slide-up`;

// export const inViewBlurUp = `[&.in-view]:motion-preset-blur-up [&.in-view]:motion-duration-[850ms]`;

// export const inViewSlideDown = `[&.in-view]:motion-preset-slide-down [&.in-view]:motion-duration-[850ms]`;

// export const inViewBlurDown = `[&.in-view]:motion-preset-blur-down-lg [&.in-view]:motion-duration-[850ms]`;

export const inViewSlideLeft = `[&.in-view]:motion-preset-slide-left-sm [&.in-view]:motion-duration-[850ms]`;

export const inViewBlurLeft = `[&.in-view]:motion-preset-blur-left [&.in-view]:motion-duration-[850ms]`;

// export const inViewCardsSlideLeft = `[&.in-view]:motion-preset-slide-left [&.in-view]:motion-ease-spring-bouncy`;

export const inViewFade = `[&.in-view]:motion-preset-fade-lg [&.in-view]:motion-duration-[2s]`;

export const getCardsAnimationDelay = (cardIndex: number, delayModifier: number = 200) => ({
    "--motion-delay": `${(cardIndex + 1) * delayModifier}ms`,
});
