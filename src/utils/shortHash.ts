export function shortHash(input: string): string {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
        const char = input.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    // Convert to positive number and then to base 36 (numbers + letters)
    return "_" + Math.abs(hash).toString(36);
}
