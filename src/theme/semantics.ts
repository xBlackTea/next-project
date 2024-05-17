import { ThemeSemantics } from "@yamada-ui/react"
import { text } from "stream/consumers"

export const semantics: ThemeSemantics = {
    colors: {
        primary: "neutral.950",
        secondary: "flashy.500",

        subHeader: {
            bg: "#fff",
            hoverBg: "neutral.100",
            hoverBgArrow: "neutral.900",
            mainText: "#000",
            line: "neutral.100",
        },
        carousel: {
            bg: ["black", "flashy.700"],
        },
        footer: {
            bg: ["#000", "#222"],
        },

        topSectionHeader: {
            bg: ["black", "flashy.500"],
            title: "#fff",
            button: ["#fff", "#000"],
        }
    },
    colorSchemes: {
        secondary: "flashy",
    }
}