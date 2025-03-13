// import parsing from './parsing.jsx'






export default function TextArea(){
    
        return (
            <>
            <div>
                <div id="hi">
                    <div  contentEditable="true" id="resumeCode" style={{border:"1px solid white", width:"400px", height:"500px"}} name=""  >
                        %Resume
                    </div>
                    <button>
                        Compile
                    </button>
                </div>
            </div>
        </>
    )
}