import { Image, Link } from "@yamada-ui/react"

export const HeaderLogo = () => {
    return (
        <Link
            textDecoration="none"
            href="/"
        >
            <Image
                display="flex"
                justifyContent="center"
                alignItems="center"
                maxH="35px"
                maxW="50vw"
                src="/HAL_Cinema_Logo_White.svg"
                objectFit="cover"
                alt='HAL_Cinema_Logo_White'
            />
        </Link>
    )
}
