// import consolTags from "./parse.js";
let data = "";


function consolTags(data){
    let tags = []
    let count = 0;
    let trimData = '';
    for(let i = 0;i < data.length;i++){
        if(data[i] == '%' && i < data.length){
            i++;
            while(data[i] != '\n'){
                i++;
            }i++;
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
    // console.log(count+1);
}
setTimeout(() => {
    // console.log("hi");
    document.addEventListener('DOMContentLoaded', () => { // failed attempts
        console.log("DOM content loaded");
        let imagePreview = document.getElementById('show');
        for(let i = 1;i < 5;i++){
            document.getElementById(`img${i}`).addEventListener('change', (event) => {
                console.log(`image${i} chosen/changed`);
                    const file = event.target.files[0];

                    if (file) {
                        imageFile = file; 
                        const reader = new FileReader();
                        reader.onload = function(e) {
                            imagePreview.src = e.target.result;
                            imagePreview.style.display = 'block';       
                        };
                        reader.readAsDataURL(file);
                    }
                document.getElementById('para').textContent = `image ${i} is:`
                }
            )
        }
        console.log(document.getElementById('Templates').childNodes.forEach((e) => {
            let save = document.createElement('div');
            save = e;

            let use = document.createElement('button');
            let download = document.createElement('button');
            let box = document.createElement('div');
            box.appendChild(use);
            box.appendChild(download);
            e.addEventListener('mouseover', () => {
                console.log(e.id);
                use.style.width = "100px";
                use.style.height = "100px";
                download.style.width = "100px";
                download.style.height = "100px";
                use.textContent = "use";
                download.textContent = "download";
                use.style.background = "green";
                use.style.outline = "none";
                download.style.outline = "none";
                download.style.background = "purple";
                use.style.borderRadius = 0;
                download.style.borderRadius = 0;
                use.style.marginRight = "20px";
                download.style.marginRight = "20px";
                use.addEventListener('click', () => {
                    // function func(){console.log("Hi i am cliked");}
                    // func();
                    console.log("HI i am cliked")
                })
                
                download.addEventListener('click', () => {
                    // function func(){console.log("Hi i am cliked");}
                    // func();
                    console.log("HI i am cliked")
                })
                
                // console.log("clicked");
                
                box.style.width = "100px";
                box.style.height = "200px";
                
                e.replaceWith(box);
                // e.replaceChild(e);
            })
            box.addEventListener('mouseleave', () => {
                // use.removeEventListener('click');
                // download.removeEventListener('click');
                box.replaceWith(save);
            })
        }));
    })
    let debounceTimeout;
    // setTimeout(() => {
        document.getElementById("resumeCode").addEventListener('input', function(e) {
            // console.log("adsaacsddd")
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => {
                data = document.getElementById("resumeCode").innerHTML
                      .replace(/<div>/g, "\n")
                      .replace(/<\/div>/g, "")
                      .replace(/<br>/g, "\n");
                    
                // data = (textContent);
                // setTimeout(() => {
                    // console.log(data);
                consolTags(data);
                // }, 100);
            }, 1000);
        });
    // }, 4000);
}, 200);


// export default data;