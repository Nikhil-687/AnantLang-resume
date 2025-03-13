import './App.css'
import InputImage from './inputImage.jsx'
import img1 from './assets/react.svg'
import {data} from './data.jsx'
// import img3 from './assets/jake.jpg'

function Hero() {
  console.log("Datajsx called");
  console.log(data.name);
  console.log(data.age);
  return (
    <>
    <h2>Welcome to Resume Builder</h2>

    <p>select templates from the following</p>


    <div style={{display:"flex"}} id='Templates'>
        <div style={{borderRadius: "5px", marginRight:"20px", marginLeft:"20px", width: "100px", border:"1px solid white", height:"200px"}} id="temp1">
            <img src={img1} alt="" style={{alignItems:"center", justifyContent:"center",  width: "100px", height:"200px"}} />
        </div>
        <div id="temp2" style={{borderRadius: "5px", marginRight:"20px", width: "100px", border:"1px solid white", height:"200px"}}>
            <img src={img1} alt="" style={{alignItems:"center", justifyContent:"center",  width: "100px", height:"200px"}} />
        </div>
        <div id="temp3" style={{borderRadius: "5px", marginRight:"20px", width: "100px", border:"1px solid white", height:"200px"}}>
            <img src={img1} alt="" style={{alignItems:"center", justifyContent:"center",  width: "100px", height:"200px"}} />
        </div>
        <div id="temp4" style={{borderRadius: "5px", marginRight:"20px", width: "100px", border:"1px solid white", height:"200px"}}>
            <img src={img1} alt="" style={{alignItems:"center", justifyContent:"center",  width: "100px", height:"200px"}} />
        </div>
        {/* <div style={{width: "100px", borderRadius: "5px", height:"200px", border:"1px solid white"}}>hi</div> */}
    </div>

       <InputImage/>
      {/* <h2>ddsdg</h1> */}
      <img src={img1} alt="" id="show" />


    </>
  )
}

export default Hero
