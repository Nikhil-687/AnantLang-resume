export default function InputImage(){
    
    
    return (
        <>
            <div>
                <div id="hi">
                    <div>
                        {/* <h1>fill in your information</h1> */}
                    </div>
                    <div>
                        <h2 style={{justifySelf: 'left'}}>personal Info</h2>
                        {/* <div style={{display:"flex"}}> */}
                            <p style={{marginBottom:"-3px", justifySelf: 'left', paddingBottom:"1px"}}>Name: </p>
                            <input type="text" style={{justifySelf: 'left', padding:"0px"}} />  
                        {/* </div> */}
                        
                            <p style={{marginBottom:"-3px", justifySelf: 'left', paddingBottom:"1px"}}>email: </p>
                            <input type="email" style={{justifySelf: 'left', padding:"0px"}}/>  
                            
                            <p style={{marginBottom:"-3px", justifySelf: 'left', paddingBottom:"1px"}}>locality: </p>
                            <input type="text" style={{justifySelf: 'left', padding:"0px"}}/>  
                        
                        <hr />
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <h3 style={{display: 'contents'}}>image1:   </h3>
                        <input type="file" name="image1" id="img1" />
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <h3 style={{display: "contents"}}>image2:   </h3>
                        <input type="file" name="image1" id="img2" />
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <h3 style={{display: "contents"}}>image3:   </h3>
                        <input type="file" name="image1" id="img3" />
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <h3 style={{display: "contents"}}>image4:   </h3>
                        <input type="file" name="image1" id="img4" />
                    </div>
                    <p id="para">last selected image</p>
                    {/* <img src="./assets/react.svg" alt="selected images" id="sow" /> */}
                </div>
            </div>
        </>
    )
}