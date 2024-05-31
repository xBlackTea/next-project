import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <div style={{ display:"flex", margin:"0 auto", width:"1200px", height:"2000px", backgroundColor:"#fff"}}>
      <div style={{width:"315px", backgroundColor:"#111"}}>
        <div style={{width:"315px", height:"15px", color:"#fff"}}></div>
        <div style={{width:"315px", height:"50px", backgroundColor:"#08f",textAlign:"center", fontSize:"30px", lineHeight:"1.5", color:"#fff"}}>エリア</div>
        <div style={{width:"315px", height:"50px", textAlign:"center", fontSize:"30px", lineHeight:"1.5", color:"#fff"}}>北海道</div>
        <div style={{width:"315px", height:"2px", backgroundColor:"#fff"}}></div>
        <div style={{width:"315px", height:"50px", textAlign:"center", fontSize:"30px", lineHeight:"1.5", color:"#fff"}}>東北</div>
        <div style={{width:"315px", height:"2px", backgroundColor:"#fff"}}></div>
        <div style={{width:"315px", height:"50px", textAlign:"center", fontSize:"30px", lineHeight:"1.5", color:"#fff"}}>関東</div>
        <div style={{width:"315px", height:"2px", backgroundColor:"#fff"}}></div>
        <div style={{width:"315px", height:"50px", textAlign:"center", fontSize:"30px", lineHeight:"1.5", color:"#fff"}}>北陸</div>
        <div style={{width:"315px", height:"2px", backgroundColor:"#fff"}}></div>
        <div style={{width:"315px", height:"50px", textAlign:"center", fontSize:"30px", lineHeight:"1.5", color:"#fff"}}>中部</div>
        <div style={{width:"315px", height:"2px", backgroundColor:"#fff"}}></div>
        <div style={{width:"315px", height:"50px", textAlign:"center", fontSize:"30px", lineHeight:"1.5", color:"#fff"}}>近畿</div>
        <div style={{width:"315px", height:"2px", backgroundColor:"#fff"}}></div>
        <div style={{width:"315px", height:"50px", textAlign:"center", fontSize:"30px", lineHeight:"1.5", color:"#fff"}}>中国・四国</div>
        <div style={{width:"315px", height:"2px", backgroundColor:"#fff"}}></div>
        <div style={{width:"315px", height:"50px", textAlign:"center", fontSize:"30px", lineHeight:"1.5", color:"#fff"}}>九州</div>
        <div style={{width:"315px", height:"2px", backgroundColor:"#fff"}}></div>
      </div>
      <div>
        <div style={{width:"855px", height:"30px", marginTop:"15px", marginLeft:"15px", borderRadius:"2px", backgroundColor:"#111"}}>
          <p style={{paddingLeft:"10px", fontSize:"16px", lineHeight:"1.8", color:"#fff"}}>トップページ {" > "} 劇場案内</p>
        </div>
        <div style={{width:"855px", height:"60px", marginTop:"15px", marginLeft:"15px", borderRadius:"2px", backgroundColor:"#111"}}>
          <p style={{paddingLeft:"10px", fontSize:"30px", lineHeight:"1.8", color:"#fff"}}>劇場一覧</p>
        </div>
        <div style={{width:"855px", height:"350px", marginTop:"15px", marginLeft:"15px", paddingTop:"10px", borderRadius:"2px", border:"solid,1px,#ddd",backgroundColor:"#fff"}}>
          <div style={{width:"835px", height:"40px", marginLeft:"10px", borderRadius:"2px", backgroundColor:"#08f"}}>
            <p style={{paddingLeft:"10px", fontSize:"30px", lineHeight:"1.2", color:"#fff"}}>HAL 東京</p>
          </div>
          <div style={{display:"flex"}}>
            <div style={{width:"280px", height:"280px", marginTop:"10px", marginLeft:"10px", borderRadius:"2px", backgroundColor:"#999"}}>
              <Image src="/hal_tokyo.jpg" alt="HAL Nagoya" width={280} height={280} style={{ borderRadius: "2px" }} />
            </div>
            <div style={{width:"545px", height:"280px", marginTop:"10px", marginLeft:"10px", borderRadius:"2px", border:"solid,1px,#ddd",backgroundColor:"#fff"}}>テキスト</div>
          </div>
        </div>
        <div style={{width:"855px", height:"350px", marginTop:"15px", marginLeft:"15px", paddingTop:"10px", borderRadius:"2px", border:"solid,1px,#ddd",backgroundColor:"#fff"}}>
          <div style={{width:"835px", height:"40px", marginLeft:"10px", borderRadius:"2px", backgroundColor:"#08f"}}>
            <p style={{paddingLeft:"10px", fontSize:"30px", lineHeight:"1.2", color:"#fff"}}>HAL 名古屋</p>
          </div>
          <div style={{display:"flex"}}>
            <div style={{width:"280px", height:"280px", marginTop:"10px", marginLeft:"10px", borderRadius:"2px", backgroundColor:"#999"}}>
              <Image src="/hal_nagoya.jpg" alt="HAL Nagoya" width={280} height={280} style={{ borderRadius: "2px" }} />
            </div>
            <div style={{width:"545px", height:"280px", marginTop:"10px", marginLeft:"10px", borderRadius:"2px", border:"solid,1px,#ddd",backgroundColor:"#fff"}}>テキスト</div>
          </div>
        </div>
        <div style={{width:"855px", height:"350px", marginTop:"15px", marginLeft:"15px", paddingTop:"10px", borderRadius:"2px", border:"solid,1px,#ddd",backgroundColor:"#fff"}}>
          <div style={{width:"835px", height:"40px", marginLeft:"10px", borderRadius:"2px", backgroundColor:"#08f"}}>
            <p style={{paddingLeft:"10px", fontSize:"30px", lineHeight:"1.2", color:"#fff"}}>HAL 大阪</p>
          </div>
          <div style={{display:"flex"}}>
            <div style={{width:"280px", height:"280px", marginTop:"10px", marginLeft:"10px", borderRadius:"2px", backgroundColor:"#999"}}>
              <Image src="/hal_osaka.jpg" alt="HAL Nagoya" width={280} height={280} style={{ borderRadius: "2px" }} />
            </div>
            <div style={{width:"545px", height:"280px", marginTop:"10px", marginLeft:"10px", borderRadius:"2px", border:"solid,1px,#ddd",backgroundColor:"#fff"}}>テキスト</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;