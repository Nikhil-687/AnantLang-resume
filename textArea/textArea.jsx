// import parsing from './parsing.jsx'

import './textStyles.css'




export default function TextArea(){
    
        return (
            <>
            <div>
                <div id="hi">
                    <div  contentEditable="true" id="resumeCode" style={{border:"1px solid white", width:"400px", height:"500px"}} name=""  >
                        {/* class name = comment, tag */}
                    
                    </div>
                    <button>
                        Compile
                    </button>
                </div>
            </div>
        </>
    )
}