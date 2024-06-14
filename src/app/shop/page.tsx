import { Box, Center, Grid, GridItem, Image, Text } from '@yamada-ui/react'
import React from 'react'
import Foods from './_components/block/Foods'
import Drink from './_components/block/Drink'

const page = () => {
  return (
    <Box m="0 auto">
      <Center style={{width:" 100%", height:"30px", margin:"0 auto", borderRadius:"2px", backgroundColor:"#111"}}>
        <p style={{paddingLeft:"10px", fontSize:"16px", lineHeight:"1.8", color:"#fff"}}>
          <a href='../'>トップページ</a>
          {" > "}
          <a href='shop'>売店案内</a>
        </p>
      </Center>

      <Foods/>

      <Drink/>

      
    </Box>
  )
}

export default page
