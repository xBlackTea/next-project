"use client"
import { ThemeConfig, extendConfig } from "@yamada-ui/react"

const config: ThemeConfig = {
    initialColorMode: "dark",
}

export const customConfig = extendConfig(config)