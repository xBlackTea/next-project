import { Box, Text } from '@yamada-ui/react'
import React from 'react'

const Drink = () => {
  return (
    <Box bgColor="#fff" color="#000" py="20px">
      <Box w="80%" m="0 auto" bgColor="#111" lineHeight="1.5" color="#fff" p="10px">
        <Text ml="1vw" fontSize="2rem">ドリンク</Text>
      </Box>
      
      <Box display="flex" flexWrap="wrap" w="80%" m="20px auto" gap="20px">
        
        {/* ドリンクセット */}
        <Box w="calc(50% - 10px)" p="20px" bgColor="#f5f5f5" borderRadius="8px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)">
          <Text textAlign="center" fontSize="1.5rem" borderBottom="1px dotted #aaa" pb="5px" mb="15px">
            S(￥300) M(￥400) L(￥500)
          </Text>
          
          <Box>
            <Box display="flex" mb="10px">
              <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・ペプシコーラ</Text>
              <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・なっちゃんオレンジ</Text>
            </Box>
            
            <Box display="flex" mb="10px">
              <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・ペプシコーラZERO</Text>
              <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・ウーロン茶</Text>
            </Box>
            
            <Box display="flex" mb="10px">
              <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・ジンジャーエール</Text>
              <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・アイスティー</Text>
            </Box>
            
            <Box display="flex" mb="10px">
              <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・メロンソーダ</Text>
              <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・100%オレンジ</Text>
            </Box>
          </Box>
        </Box>

        {/* 単品ドリンク */}
        <Box w="calc(50% - 10px)" p="20px" bgColor="#f9f9f9" borderRadius="8px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)">
          <Text textAlign="center" fontSize="1.5rem" borderBottom="1px dotted #aaa" pb="5px" mb="15px">
            単品(￥500) ホットorアイス
          </Text>
          
          <Box>
            <Box display="flex" mb="10px">
              <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・コーヒー</Text>
              <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・カフェラテ</Text>
            </Box>
            
            <Box display="flex" mb="10px">
              <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・ミルクティー</Text>
              <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・カフェモカ</Text>
            </Box>
            
            <Box display="flex" mb="10px">
              <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・いちごオレ</Text>
              <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・ココア</Text>
            </Box>
            
            <Box display="flex" mb="10px">
              <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・抹茶オレ</Text>
              <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・キャラメルラテ</Text>
            </Box>
          </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default Drink
