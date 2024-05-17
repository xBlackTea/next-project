import { Image, Link } from "@yamada-ui/react"

export const HeaderLogo = () => {
    return (
        <Link
            textDecoration="none"
            href="/"
        >
            <Image
                maxH="35px"
                maxW="50vw"
                src="/HAL_Cienema_Logo_White.svg"
                objectFit="cover"
                alt='HAL_Cienema_Logo_White'
            />
        </Link>
    )
}
