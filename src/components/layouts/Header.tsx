import { Box, Link } from "@yamada-ui/react";
import { HeaderButton } from "../elements";

export const Header = () => {

    return (
        <>
        <Box
            w="full"
            h="60px"
            p="0 60px"
            bg="primary"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
        >
            <div style={{color: "#fff", fontWeight: "bold"}}>ここにロゴ</div>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="10px"
            >
                <Link href="tel:052-551-1051">
                    <HeaderButton variant="outline">052-551-1001</HeaderButton>
                </Link>
                <HeaderButton>xxx@xxx.com</HeaderButton>
            </Box>
        </Box>
        </>
    );
}