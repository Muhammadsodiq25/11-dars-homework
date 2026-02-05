import { Link } from "react-router-dom"

const Footer = ({logo, cont}) => {
  return (
    <footer style={{marginTop:'100px', alignItems:'center', display:'flex', justifyContent:'space-around', padding:'20px'}}>
      <img src={logo} alt="" />
      <div style={{display:'flex', gap:'100px'}}>
        {
          cont.map((cart,index) => {
            return <div key={index} style={{display:'flex',  flexDirection:'column', gap:'20px'}}>
              <h3 style={{fontFamily:"Syne, sans-serif", fontWeight:'500', fontSize:'18px', color:'gray'}}>{cart.title}</h3>
              <ul style={{display:'flex', gap:'10px', flexDirection:'column'}}> 
                {cart.links.map((link, index) => {
                  return <li key={index}>
                    <Link style={{color:'#000000', fontFamily:'Inter, sans-serif', fontWeight:'500', fontSize:'15px'}}>{link}</Link>
                  </li>
                })}
              </ul>
            </div>
          })
        }
      </div>
    </footer>
  )
}

export default Footer
