export function simplifyAspectRatio(width: number, height: number) {
    // Helper function to calculate the Greatest Common Divisor (GCD)
    function gcd(a: number, b: number) {
        return b === 0 ? a : gcd(b, a % b);
    }

    // Ensure width and height are positive integers
    width = Math.abs(Math.round(width));
    height = Math.abs(Math.round(height));

    // Calculate the GCD
    const divisor = gcd(width, height);

    // Simplify the aspect ratio
    return {
        width: width / divisor,
        height: height / divisor,
    };
}
