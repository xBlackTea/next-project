import { ThemeSemantics } from "@yamada-ui/react"
import { text } from "stream/consumers"

export const semantics: ThemeSemantics = {
    colors: {
        primary: "neutral.950",
        secondary: "blue.500",

        subHeader: {
            bg: "#fff",
            hoverBg: "neutral.100",
            hoverBgArrow: "neutral.900",
            mainText: "#000",
            line: "neutral.100",
        },
        carousel: {
            bg: ["black", "blue.700"],
        },
        footer: {
            bg: ["#000", "blue.500"],
        },

        topSectionHeader: {
            bg: ["black", "blue.500"],
            hover: ["black", "blue.500"],
            title: "#fff",
            button: ["blue.500", "#000"],
        }
    },
    colorSchemes: {
        secondary: "blue",
    }
}