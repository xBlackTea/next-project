import { Box, Text } from '@yamada-ui/react'
import React from 'react'

const Drink = () => {
  return (
    <Box>

        <Box w="80%" m="20px auto" bgColor="#111" lineHeight="1.5" color="#fff">
            <Text ml="1vw" fontSize="2rem">ドリンク</Text>
        </Box>
      
        <Box display="flex" w="80%" m="10px auto">

            <Box w="50%" m="0 10px 30px 10px">
                <Text textAlign="center" m="0 auto" fontSize="1.5rem" borderBottom="dotted">
                    S(￥300) M(￥400) L(￥500)
                </Text>

                <Box>

                    <Box display="flex" m="10px 0 0 0">
                        <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・ペプシコーラ</Text>
                        <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・なっちゃんオレンジ</Text>
                    </Box>

                    <Box display="flex" m="10px 0 0 0">
                        <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・ペプシコーラZERO</Text>
                        <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・ウーロン茶</Text>
                    </Box>

                    <Box display="flex" m="10px 0 0 0">
                        <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・ジンジャーエール</Text>
                        <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・アイスティー</Text>
                    </Box>

                    <Box display="flex" m="10px 0 0 0">
                        <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・メロンソーダ</Text>
                        <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・100%オレンジ</Text>
                    </Box>

                </Box>
            </Box>


            <Box w="50%" m="0 10px 30px 10px">
                <Text textAlign="center" m="0 auto" fontSize="1.5rem" borderBottom="dotted">
                    単品(￥500) ホットorアイス
                </Text>

                <Box>

                    <Box display="flex" m="10px 0 0 0">
                        <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・コーヒー</Text>
                        <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・カフェラテ</Text>
                    </Box>

                    <Box display="flex" m="10px 0 0 0">
                        <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・ミルクティー</Text>
                        <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・カフェモカ</Text>
                    </Box>

                    <Box display="flex" m="10px 0 0 0">
                        <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・いちごオレ</Text>
                        <Text w="50%" fontSize="1.5rem" letterSpacing="2px">・ココア</Text>
                    </Box>

                    <Box display="flex" m="10px 0 0 0">
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
