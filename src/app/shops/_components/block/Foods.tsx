import { Box, Image, Text } from '@yamada-ui/react'
import React from 'react'

const Foods = () => {
  return (
    <Box>
        <Box w="80%" m="20px auto" bgColor="#111" lineHeight="1.5" color="#fff">
            <Text ml="1vw" fontSize="2rem">フード</Text>
        </Box>

        <Box display="flex" w="80%" m="10px auto">

            {/* ポップコーン */}
            <Box display="flex" w="50%">
                <Box minW="230px" w="230px" h="230px" m="10px" borderRadius="2px" bgColor="#999">
                <Image src="/popcorn.jpg" alt="HAL Nagoya" w="100%" h="100%" borderRadius="2px"/>
                </Box>
                <Box display="flex" flexDirection="column" w="100%">
                <Box display="flex" m="10px 10px 0 0" justifyContent="space-between" borderBottom="dotted">              
                    <Text fontSize="1.6rem" m="0 10px 0 0">ポップコーン</Text>
                    <Text display="flex" alignItems="flex-end">S(￥300) M(￥400) L(￥500)</Text>
                </Box>
                <Box>
                    <Text m="5px 0 0 0" fontSize="1.5rem">・塩</Text>
                    <Text m="5px 0 0 0" fontSize="1.5rem">・キャラメル</Text>
                    <Text m="5px 0 0 0" fontSize="1.5rem">・バターしょうゆ</Text>
                </Box>
                </Box>
            </Box>

            {/* ホットドッグ */}
            <Box display="flex" w="50%">
                <Box minW="230px" w="230px" h="230px" m="10px" borderRadius="2px" bgColor="#999">
                <Image src="/hotdog.jpg" alt="HAL Nagoya" w="100%" h="100%" borderRadius="2px"/>
                </Box>
                <Box display="flex" flexDirection="column" w="100%">
                <Box display="flex" m="10px 10px 0 0" justifyContent="space-between" borderBottom="dotted">              
                    <Text fontSize="1.6rem" m="0 10px 0 0">ホットドッグ</Text>
                    <Text display="flex" alignItems="flex-end">(￥500)</Text>
                </Box>
                <Box>
                    <Text m="5px 0 0 0" fontSize="1.5rem">・ケチャップ&amp;マスタード</Text>
                    <Text m="5px 0 0 0" fontSize="1.5rem">・チーズ&amp;チリソース</Text>
                </Box>
                </Box>
            </Box>
            </Box>


            <Box display="flex" w="80%" m="10px auto">

            {/* チュロス */}
            <Box display="flex" w="50%">
                <Box minW="230px" w="230px" h="230px" m="10px" borderRadius="2px" bgColor="#999">
                <Image src="/churros.jpg" alt="HAL Nagoya" w="100%" h="100%" borderRadius="2px"/>
                </Box>
                <Box display="flex" flexDirection="column" w="100%">
                <Box display="flex" m="10px 10px 0 0" justifyContent="space-between" borderBottom="dotted">              
                    <Text fontSize="1.6rem" m="0 10px 0 0">チュロス</Text>
                    <Text display="flex" alignItems="flex-end">S(￥300) W(￥500)</Text>
                </Box>
                <Box>
                    <Text m="5px 0 0 0" fontSize="1.5rem">・シナモン</Text>
                    <Text m="5px 0 0 0" fontSize="1.5rem">・チョコ</Text>
                </Box>
                </Box>
            </Box>

            {/* ポテト */}
            <Box display="flex" w="50%">
                <Box minW="230px" w="230px" h="230px" m="10px" borderRadius="2px" bgColor="#999">
                <Image src="/potato.jpg" alt="HAL Nagoya" w="100%" h="100%" borderRadius="2px"/>
                </Box>
                <Box display="flex" flexDirection="column" w="100%">
                <Box display="flex" m="10px 10px 0 0" justifyContent="space-between" borderBottom="dotted">              
                    <Text fontSize="1.6rem" m="0 10px 0 0">ポテト</Text>
                    <Text display="flex" alignItems="flex-end">S(￥300) M(￥400) L(￥500)</Text>
                </Box>
                <Box>
                    <Text m="5px 0 0 0" fontSize="1.5rem">・ケチャップ&amp;マスタード</Text>
                    <Text m="5px 0 0 0" fontSize="1.5rem">・チーズ&amp;チリソース</Text>
                </Box>
                </Box>
            </Box>
        </Box>
      
    </Box>
  )
}

export default Foods
