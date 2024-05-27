import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <div style={{ display:"flex", margin:"0 auto", width:"1200px", height:"2000px", backgroundColor:"#fff"}}>
      <div style={{width:"315px", backgroundColor:"#999"}}></div>
      <div>
        <div style={{width:"855px", height:"30px", marginTop:"15px", marginLeft:"15px", borderRadius:"2px", backgroundColor:"#ddd"}}>
          <p style={{paddingLeft:"10px", fontSize:"16px", lineHeight:"1.8", color:"#fff"}}>トップページ {" > "} 劇場案内</p>
        </div>
        <div style={{width:"855px", height:"60px", marginTop:"15px", marginLeft:"15px", borderRadius:"2px", backgroundColor:"#ddd"}}>
          <p style={{paddingLeft:"10px", fontSize:"30px", lineHeight:"1.8", color:"#fff"}}>劇場一覧</p>
        </div>
        <div style={{width:"855px", height:"350px", marginTop:"15px", marginLeft:"15px", paddingTop:"10px", borderRadius:"2px", backgroundColor:"#ddd"}}>
          <div style={{width:"835px", height:"40px", marginLeft:"10px", borderRadius:"2px", backgroundColor:"#999"}}>
            <p style={{paddingLeft:"10px", fontSize:"30px", lineHeight:"1.2", color:"#fff"}}>HAL 東京</p>
          </div>
          <div style={{display:"flex"}}>
            <div style={{width:"280px", height:"280px", marginTop:"10px", marginLeft:"10px", borderRadius:"2px", backgroundColor:"#999"}}>
              <Image src="/hal_tokyo.jpg" alt="HAL Nagoya" width={280} height={280} style={{ borderRadius: "2px" }} />
            </div>
            <div style={{width:"545px", height:"280px", marginTop:"10px", marginLeft:"10px", borderRadius:"2px", backgroundColor:"#999"}}></div>
          </div>
        </div>
        <div style={{width:"855px", height:"350px", marginTop:"15px", marginLeft:"15px", paddingTop:"10px", borderRadius:"2px", backgroundColor:"#ddd"}}>
          <div style={{width:"835px", height:"40px", marginLeft:"10px", borderRadius:"2px", backgroundColor:"#999"}}>
            <p style={{paddingLeft:"10px", fontSize:"30px", lineHeight:"1.2", color:"#fff"}}>HAL 名古屋</p>
          </div>
          <div style={{display:"flex"}}>
            <div style={{width:"280px", height:"280px", marginTop:"10px", marginLeft:"10px", borderRadius:"2px", backgroundColor:"#999"}}>
              <Image src="/hal_nagoya.jpg" alt="HAL Nagoya" width={280} height={280} style={{ borderRadius: "2px" }} />
            </div>
            <div style={{width:"545px", height:"280px", marginTop:"10px", marginLeft:"10px", borderRadius:"2px", backgroundColor:"#999"}}></div>
          </div>
        </div>
        <div style={{width:"855px", height:"350px", marginTop:"15px", marginLeft:"15px", paddingTop:"10px", borderRadius:"2px", backgroundColor:"#ddd"}}>
          <div style={{width:"835px", height:"40px", marginLeft:"10px", borderRadius:"2px", backgroundColor:"#999"}}>
            <p style={{paddingLeft:"10px", fontSize:"30px", lineHeight:"1.2", color:"#fff"}}>HAL 大阪</p>
          </div>
          <div style={{display:"flex"}}>
            <div style={{width:"280px", height:"280px", marginTop:"10px", marginLeft:"10px", borderRadius:"2px", backgroundColor:"#999"}}>
              <Image src="/hal_osaka.jpg" alt="HAL Nagoya" width={280} height={280} style={{ borderRadius: "2px" }} />
            </div>
            <div style={{width:"545px", height:"280px", marginTop:"10px", marginLeft:"10px", borderRadius:"2px", backgroundColor:"#999"}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;