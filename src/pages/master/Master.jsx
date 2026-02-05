import img from "../../assets/master-img.png"

const Master = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'100px', marginTop:'100px', height:'500px'}}>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', gap:'50px'}}>
        <h3 style={{fontFamily:'Montserrat, sans-serif', fontWeight:'700', fontSize:'40px'}}>GYM MASTER</h3>
        <ul style={{display:'flex', flexDirection:'column', gap:'50px'}}>
          <li style={{display:'flex', flexDirection:'column', gap:'10px',  alignItems:'start'}}>
            <h4 style={{fontFamily:'Montserrat, sans-serif', fontWeight:'600', fontSize:'30px', fontStyle:'semibold'}}>Brown Body Fitness</h4>
            <p style={{fontFamily:'Montserrat, sans-serif', fontWeight:'400', fontSize:'18px', color:'gray'}}>Lorem Ipsum is simply dummy text of the printing and typesetting <br />industry. Lorem Ipsum has been the industry's standard dummy text <br />ever since the 1500s, when an unknown printer took a galley of type  </p>
          </li>
                    <li style={{display:'flex', flexDirection:'column', gap:'10px',  alignItems:'start'}}>
            <h4 style={{fontFamily:'Montserrat, sans-serif', fontWeight:'600', fontSize:'30px', fontStyle:'semibold'}}>Single Dumbell</h4>
            <p style={{fontFamily:'Montserrat, sans-serif', fontWeight:'400', fontSize:'18px', color:'gray'}}>Lorem Ipsum is simply dummy text of the printing and typesetting <br />industry. Lorem Ipsum has been the industry's standard dummy text <br />ever since the 1500s, when an unknown printer took a galley of type  </p>
          </li>
                    <li style={{display:'flex', flexDirection:'column', gap:'10px',  alignItems:'start'}}>
            <h4 style={{fontFamily:'Montserrat, sans-serif', fontWeight:'600', fontSize:'30px', fontStyle:'semibold'}}>Icon Box Heading</h4>
            <p style={{fontFamily:'Montserrat, sans-serif', fontWeight:'400', fontSize:'18px', color:'gray'}}>Lorem Ipsum is simply dummy text of the printing and typesetting <br />industry. Lorem Ipsum has been the industry's standard dummy text <br />ever since the 1500s, when an unknown printer took a galley of type  </p>
          </li>
        </ul>
      </div>
      <img src={img} alt="" />
    </div>
  )
}

export default Master
