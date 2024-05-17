import { ThemeSemantics } from "@yamada-ui/react"

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
        footer: {
            bg: ["#ddd", "#222"],
        },
    },
    colorSchemes: {
        secondary: "flashy",
    }
}