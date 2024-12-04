export function getVideoProviderByUrl(videoUrl: string) {
    return videoUrl.includes("youtube") ? "youtube" : "vimeo";
}

// Function to extract Vimeo ID from URL
export function extractId(url: string): string | null {
    const regex = /\b\d{5,}\b/;
    const match = url.match(regex);
    return match ? match[0] : null;
}
