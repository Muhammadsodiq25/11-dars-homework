import img from "../../assets/main-img.png"

const Main = () => {
  return (
    <main style={{display:'flex', justifyContent:'center', gap:'100px', alignItems:'center', marginTop:"50px"}}>
      <div className="">
        <img src={img} style={{height:"500px"}} alt="" />
      </div>
      <div style={{display:'flex', gap:'50px', flexDirection:'column', alignItems:'start'}}>
        <h1 style={{fontFamily:'Red Rose, sans-serif', fontSize:'70px'}}>Get Fit & <br /> Handsome</h1>
        <div style={{display:'flex', gap:'50px'}}>
            <button style={{color:'#FF9D0B', border:'1px solid #FF9D0B', background:'inherit', padding:'15px 50px', borderRadius:'40px', fontWeight:'700', fontSize:'15px', cursor:'pointer', fontFamily:'Syne, sans-serif'}}>Explore</button>
            <button style={{borderRadius:'40px', cursor:'pointer', background:'#FF9D0B', border:'none', fontFamily:'Poppins, sans-serif', color:'white', fontWeight:'500', fontSize:'20px', padding:'10px 50px'}}>$190</button>
        </div>
        <p style={{fontFamily:'Poppins, sans-serif', fontWeight:'400', fontSize:'22px', color:'#101010'}}>Lorem Ipsum is simply dummy text of the printing <br />and typesetting industry. Lorem Ipsum has been <br />the industry's standard dummy text ever since the  </p>
      </div>
    </main>
  )
}

export default Main
