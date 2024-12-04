import { component$ } from "@builder.io/qwik";
import SmallCross from "./SmallCross";
import SmallCrossWithCircle from "./SmallCrossWithCircle";

interface CrossProps {
    theme?: "dark" | "light";
}

export default component$<CrossProps>(({ theme }) => {
    return theme !== "dark" ? <SmallCrossWithCircle /> : <SmallCross />;
});
