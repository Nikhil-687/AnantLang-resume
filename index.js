
let data = "";


let trimData = '';
function consolTagsAndVals(data){
    let tags = [];
    let vals = [];
    let count = 0;
    trimData = '';
    for(let i = 0;i < data.length;i++){
        if(data[i] == '%'){
            
            i++;
            while(data[i] != '\n' && i < data.length){
                i++;
            }i++;
            trimData += '\n';
        }
        // trimData+= data[i];
    
        if(data[i] == '\\'){
            trimData+= data[i];
            i++;
            let tag = "\\";
            let val = '\\';
            while(i < data.length && ((data[i] >= 'A' && data[i] <= 'Z') || (data[i] >= 'a' && data[i] <= 'z') || (data[i] >= '0' && data[i] <= '9'))){
                tag+= data[i];
                val+= data[i];
                trimData+= data[i];
                i++;
            }
            while(i < data.length && ((data[i] >= 'A' && data[i] <= 'Z') || (data[i] >= 'a' && data[i] <= 'z') || (data[i] >= '0' && data[i] <= '9') || data[i] == ' ' || data[i] == '{' || data[i] == '}' || data[i] == '(' || data[i] == ')' || data[i] == '[' || data[i] == ']')){
                if(data[i] == '{'){
                    while(data[i] != '}' && i < data.length){
                        val += data[i];
                        i++;
                    }
                }if(data[i] == '('){
                    while(data[i] != ')' && i < data.length){
                        val += data[i];
                        i++;
                    }
                }if(data[i] == '['){
                    while(data[i] != ']' && i < data.length){
                        val += data[i];
                        i++;
                    }
                }
                val += data[i];
                i++;
            }
            tags[tags.length] = tag;
            vals[vals.length] = val;
            i--;
        }
        else{
            trimData+= data[i];
        }
    }
    console.log(" ");
    console.log(trimData);
    let trimedTags = [];
    let trimedVals = [];
    for(let i = 0;i < tags.length;i++){
        if(tags[i] == '\\'){}
        else{
            trimedTags.push(tags[i]);
            trimedVals.push(vals[i]);
        }   
    }
    console.log(trimedTags);
    console.log(trimedVals);
    // tags.forEach((e) => {if(e !== '\\'){count++;console.log(e)}})
        // console.log("No. of Tags: ",count);
    // vals.forEach((e) => {if(e.trim() !== ''){console.log(e)}})
    console.log(" ");
}



setTimeout(() => {
    let debounceTimeout;
        document.getElementById("resumeCode").addEventListener('input', function(e) {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => {
                data = document.getElementById("resumeCode").innerHTML
                      .replace(/<div>/g, "\n")
                      .replace(/<\/div>/g, "")
                      .replace(/<br>/g, "\n");
                    
                consolTagsAndVals(data);
                // console.log(data);
            }, 1000);
        });
}, 200);








// /// Test Cases
// %Resume\csd\c\sd\ds\\\sd
// \ds\cs\dc\sd\\\cscd\s\sd
// \name nikhil patidar
// \age 19
// \email{patidarnikhil687@gmail.com}(red)(3.2cm)









/// comented lines, tag lines colouring 
{/* <span className="comment"></span> */}
{/* <span className="tag"></span>*/}