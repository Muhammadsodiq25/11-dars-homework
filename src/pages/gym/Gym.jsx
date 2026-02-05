
const Gym = ({cont}) => {
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'20px', alignItems:'center', textAlign:'center', marginTop:'100px'}}>
      <h3 style={{fontFamily:'Montserrat, sans-serif', fontSize:'40px', fontWeight:'700'}}>GYM PRODUCTS</h3>
      <p style={{fontFamily:'Montserrat, sans-serif', fontSize:'15px', fontWeight:'400', color:'gray'}}>Lorem Ipsum is simply dummy text of the printing and typesetting <br />industry. Lorem Ipsum has been the industry's standard dummy text <br />ever since the 1500s, when an unknown printer took a galley of type  </p>
      <div style={{display:'flex', gap:'50px', alignItems:'center', flexWrap:'wrap', justifyContent:'center', padding:'100px'}}>
              {
        cont.map((cart,index) => {
          return <div style={{background:'#F9F9F9',padding:'20px', borderRadius:'10px', display:'flex', flexDirection:'column', gap:'20px', alignItems:'start'}} key={index}>
            <img src={cart.img} style={{borderRadius:'20px', width:'auto', height:'auto', background:'gray', alignSelf:'center'}} alt="" />
            <h3 style={{fontFamily:'Montserrat, sans-serif', fontWeight:'600', fontSize:'24px'}}>{cart.title}</h3>
            <p style={{fontFamily:'Montserrat, sans-serif', fontWeight:'600', fontSize:'20px'}}>{cart.prise}</p>
          </div>
        })
      }
      </div>
    </div>
  )
}

export default Gym
