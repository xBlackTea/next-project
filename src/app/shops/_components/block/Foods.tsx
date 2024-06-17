import { Box, Image, Text } from '@yamada-ui/react'
import React from 'react'

const Foods = () => {
  return (
    <Box bgColor="#fff" color="#000" py="20px">
      <Box w="80%" m="0 auto" bgColor="#111" lineHeight="1.5" color="#fff" p="10px">
        <Text ml="1vw" fontSize="2rem">フード</Text>
      </Box>

      <Box display="flex" flexWrap="wrap" w="80%" m="20px auto" gap="20px">

        {/* ポップコーン */}
        <Box display="flex" w="calc(50% - 10px)" bgColor="#f3f3f3" borderRadius="8px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)" overflow="hidden">
          <Box minW="230px" w="230px" h="230px" bgColor="#ccc" flexShrink="0">
            <Image src="/popcorn.jpg" alt="ポップコーン" w="100%" h="100%" objectFit="cover" />
          </Box>
          <Box display="flex" flexDirection="column" p="10px" w="100%">
            <Box display="flex" justifyContent="space-between" borderBottom="1px dotted #aaa" pb="5px" mb="5px">
              <Text fontSize="1.6rem">ポップコーン</Text>
              <Text>S(￥300) M(￥400) L(￥500)</Text>
            </Box>
            <Box>
              <Text fontSize="1.5rem">・塩</Text>
              <Text fontSize="1.5rem">・キャラメル</Text>
              <Text fontSize="1.5rem">・バターしょうゆ</Text>
            </Box>
          </Box>
        </Box>

        {/* ホットドッグ */}
        <Box display="flex" w="calc(50% - 10px)" bgColor="#f3f3f3" borderRadius="8px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)" overflow="hidden">
          <Box minW="230px" w="230px" h="230px" bgColor="#ccc" flexShrink="0">
            <Image src="/hotdog.jpg" alt="ホットドッグ" w="100%" h="100%" objectFit="cover" />
          </Box>
          <Box display="flex" flexDirection="column" p="10px" w="100%">
            <Box display="flex" justifyContent="space-between" borderBottom="1px dotted #aaa" pb="5px" mb="5px">
              <Text fontSize="1.6rem">ホットドッグ</Text>
              <Text>(￥500)</Text>
            </Box>
            <Box>
              <Text fontSize="1.5rem">・ケチャップ&amp;マスタード</Text>
              <Text fontSize="1.5rem">・チーズ&amp;チリソース</Text>
            </Box>
          </Box>
        </Box>

        {/* チュロス */}
        <Box display="flex" w="calc(50% - 10px)" bgColor="#f3f3f3" borderRadius="8px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)" overflow="hidden">
          <Box minW="230px" w="230px" h="230px" bgColor="#ccc" flexShrink="0">
            <Image src="/churros.jpg" alt="チュロス" w="100%" h="100%" objectFit="cover" />
          </Box>
          <Box display="flex" flexDirection="column" p="10px" w="100%">
            <Box display="flex" justifyContent="space-between" borderBottom="1px dotted #aaa" pb="5px" mb="5px">
              <Text fontSize="1.6rem">チュロス</Text>
              <Text>S(￥300) W(￥500)</Text>
            </Box>
            <Box>
              <Text fontSize="1.5rem">・シナモン</Text>
              <Text fontSize="1.5rem">・チョコ</Text>
            </Box>
          </Box>
        </Box>

        {/* ポテト */}
        <Box display="flex" w="calc(50% - 10px)" bgColor="#f3f3f3" borderRadius="8px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)" overflow="hidden">
          <Box minW="230px" w="230px" h="230px" bgColor="#ccc" flexShrink="0">
            <Image src="/potato.jpg" alt="ポテト" w="100%" h="100%" objectFit="cover" />
          </Box>
          <Box display="flex" flexDirection="column" p="10px" w="100%">
            <Box display="flex" justifyContent="space-between" borderBottom="1px dotted #aaa" pb="5px" mb="5px">
              <Text fontSize="1.6rem">ポテト</Text>
              <Text>S(￥300) M(￥400) L(￥500)</Text>
            </Box>
            <Box>
              <Text fontSize="1.5rem">・ケチャップ&amp;マスタード</Text>
              <Text fontSize="1.5rem">・チーズ&amp;チリソース</Text>
            </Box>
          </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default Foods
