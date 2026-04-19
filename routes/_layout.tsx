import { Aside } from "@/components/base/Aside.tsx";
import { define } from "../utils.ts";
import { Footer } from "@/components/base/Footer.tsx";

export default define.layout(({ Component, state, url }) => {
    return (
        <body
            class="layout styled-scrollbar custom-bg-bc text-(--neutral-color) custom-tr-tx-bg-bo"
            style="font-family: 'Fragment Mono', monospace;"
        >
            {/* Main content: name, role, company */}
            <main
                class="absolute p-4 m-6 custom-bo-ac rounded-2xl"
                style="width: calc(100dvw - 2 * 1.5rem); min-height: calc(100dvh - 2 * 1.5rem);"
            >
                {/* Theme switcher */}
                <Aside />
                {/* Content */}
                <Component />
                {/* Footer with Tech Stack on bottom right corner */}
                <Footer />
            </main>
        </body>
    );
});