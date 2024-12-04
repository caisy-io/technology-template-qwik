import { BREAKPOINTS } from "../constants/mediaquery";
import type { IResponseOptionalValue, IResponseValue, ISize } from "../constants/types";
import type { IGenAsset } from "../services/graphql/__generated/sdk";

function getMaxWidth(response: any, tier: string, fallback: number | undefined) {
    return typeof response?.[tier] === "number"
        ? response?.[tier]
        : response?.[tier] === -1 || response?.[tier] === null
          ? undefined
          : fallback;
}

/**
@responsiveFactor: The responsiveFactor is the amout of space used on the screen in percent - default is 1 for full width image
@responsiveAspectRatio: The responsiveAspectRatio is the ratio of the image - default is the ratio of the smallest image
@responsiveMaxWidth: The responsiveMaxWidth is the max width of the image in px - default the is no limit and will scale to max of current breakpoint 
@images: The images are the images that are used to calculate the sizes, will use the lowest aspect ratio of the images
*/
export const calculateResponsiveImagesSizes = ({
    images,
    responsiveFactor,
    responsiveAspectRatio,
    responsiveMaxWidth,
}: {
    images: IGenAsset[];
    responsiveFactor?: IResponseOptionalValue<number>;
    responsiveAspectRatio?: IResponseOptionalValue<number>;
    responsiveMaxWidth?: IResponseOptionalValue<number>;
}): IResponseValue<ISize> => {
    const getAspectRatios = (): number[] =>
        images.map((image) => {
            if (image.src && image.width && image.height) {
                return image.width / image.height;
            }
            return 1;
        });

    const nativeImageLowestAspectRatio = +Math.min(...getAspectRatios()).toFixed(5);

    const factorBronze = typeof responsiveFactor?.bronze === "number" ? responsiveFactor.bronze : 1;
    const factorSilver = typeof responsiveFactor?.silver === "number" ? responsiveFactor.silver : factorBronze;
    const factorGold = typeof responsiveFactor?.gold === "number" ? responsiveFactor.gold : factorSilver;
    const factorPlatinum = typeof responsiveFactor?.platinum === "number" ? responsiveFactor.platinum : factorGold;
    const factorDiamond = typeof responsiveFactor?.diamond === "number" ? responsiveFactor.diamond : factorPlatinum;
    const factorMaster = typeof responsiveFactor?.master === "number" ? responsiveFactor.master : factorDiamond;

    let imageMaxWidthBronze = +((BREAKPOINTS.SILVER - 1) * factorBronze).toFixed(0);
    let imageMaxWidthSilver = +((BREAKPOINTS.GOLD - 1) * factorSilver).toFixed(0);
    let imageMaxWidthGold = +((BREAKPOINTS.PLATINUM - 1) * factorGold).toFixed(0);
    let imageMaxWidthPlatinum = +((BREAKPOINTS.DIAMOND - 1) * factorPlatinum).toFixed(0);
    let imageMaxWidthDiamond = +((BREAKPOINTS.MASTER - 1) * factorDiamond).toFixed(0);
    let imageMaxWidthMaster = +(BREAKPOINTS.MASTER * factorMaster).toFixed(0);

    const maxWidthBronze = typeof responsiveMaxWidth?.bronze === "number" ? responsiveMaxWidth.bronze : undefined;

    const maxWidthSilver = getMaxWidth(responsiveMaxWidth, "silver", maxWidthBronze);
    const maxWidthGold = getMaxWidth(responsiveMaxWidth, "gold", maxWidthSilver);
    const maxWidthPlatinum = getMaxWidth(responsiveMaxWidth, "platinum", maxWidthGold);
    const maxWidthDiamond = getMaxWidth(responsiveMaxWidth, "diamond", maxWidthPlatinum);
    const maxWidthMaster = getMaxWidth(responsiveMaxWidth, "master", maxWidthDiamond);

    if (maxWidthBronze && maxWidthBronze < imageMaxWidthBronze) {
        imageMaxWidthBronze = +maxWidthBronze.toFixed(0);
    }
    if (maxWidthSilver && maxWidthSilver < imageMaxWidthSilver) {
        imageMaxWidthSilver = +maxWidthSilver.toFixed(0);
    }
    if (maxWidthGold && maxWidthGold < imageMaxWidthGold) {
        imageMaxWidthGold = +maxWidthGold.toFixed(0);
    }
    if (maxWidthPlatinum && maxWidthPlatinum < imageMaxWidthPlatinum) {
        imageMaxWidthPlatinum = +maxWidthPlatinum.toFixed(0);
    }
    if (maxWidthDiamond && maxWidthDiamond < imageMaxWidthDiamond) {
        imageMaxWidthDiamond = +maxWidthDiamond.toFixed(0);
    }
    if (maxWidthMaster && maxWidthMaster < imageMaxWidthMaster) {
        imageMaxWidthMaster = +maxWidthMaster.toFixed(0);
    }

    const bronzeAspectRatio =
        typeof responsiveAspectRatio?.bronze === "number" ? responsiveAspectRatio.bronze : nativeImageLowestAspectRatio;
    const silverAspectRatio =
        typeof responsiveAspectRatio?.silver === "number" ? responsiveAspectRatio.silver : bronzeAspectRatio;
    const goldAspectRatio =
        typeof responsiveAspectRatio?.gold === "number" ? responsiveAspectRatio.gold : silverAspectRatio;
    const platinumAspectRatio =
        typeof responsiveAspectRatio?.platinum === "number" ? responsiveAspectRatio.platinum : goldAspectRatio;
    const diamondAspectRatio =
        typeof responsiveAspectRatio?.diamond === "number" ? responsiveAspectRatio.diamond : platinumAspectRatio;
    const masterAspectRatio =
        typeof responsiveAspectRatio?.master === "number" ? responsiveAspectRatio.master : diamondAspectRatio;

    const imageHeightBronze = +(imageMaxWidthBronze / bronzeAspectRatio).toFixed(0);
    const imageHeightSilver = +(imageMaxWidthSilver / silverAspectRatio).toFixed(0);
    const imageHeightGold = +(imageMaxWidthGold / goldAspectRatio).toFixed(0);
    const imageHeightPlatinum = +(imageMaxWidthPlatinum / platinumAspectRatio).toFixed(0);
    const imageHeightDiamond = +(imageMaxWidthDiamond / diamondAspectRatio).toFixed(0);
    const imageHeightMaster = +(imageMaxWidthMaster / masterAspectRatio).toFixed(0);

    return {
        bronze: { width: imageMaxWidthBronze, height: imageHeightBronze },
        silver: { width: imageMaxWidthSilver, height: imageHeightSilver },
        gold: { width: imageMaxWidthGold, height: imageHeightGold },
        platinum: { width: imageMaxWidthPlatinum, height: imageHeightPlatinum },
        diamond: { width: imageMaxWidthDiamond, height: imageHeightDiamond },
        master: { width: imageMaxWidthMaster, height: imageHeightMaster },
    };
};
