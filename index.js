
let data = "";


let trimData = '';
function consolTags(data){
    let tags = []
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
            while(i < data.length && ((data[i] >= 'A' && data[i] <= 'Z') || (data[i] >= 'a' && data[i] <= 'z') || (data[i] >= '0' && data[i] <= '9'))){
                tag+= data[i];
                trimData+= data[i];
                i++;
            }
            tags[tags.length] = tag;
            i--;
        }
        else{
            trimData+= data[i];
        }
    }
    console.log(" ");
    console.log(trimData);
    tags.forEach((e) => {if(e !== '\\'){count++;console.log(e)}})
        console.log("No. of Tags: ",count);
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
                    
                consolTags(data);
                // console.log(data);
            }, 1000);
        });
}, 200);

