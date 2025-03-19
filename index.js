
let data = "";


let trimData = '';
let colors = [];
let keyword = ['\\name', '\\defcolor'];

function invert(s){
    if(s === '{')return '}';
    if(s === '(')return ')';
    if(s === '[')return ']';
}

let preDefinedCommands = {
    "\\name":{
        // struct
        name: "\\name",
        syntax: "\\name {userName} [colour(the declared one || #000 formate)] [style:'']",
        commad: [],
        message: "This is a very basic commands take a text as input(name feild of user),further options are also provided",
        options: "B(old)/U(nderline)/H(ighlight)/L(arge)/S(mall)",
        discription: "                  \
                            This is a very basic commands take a text as input(name feild of user),further options are also provided                            \
                            syntax => \\name {userName} [colour(the declared one || #000 formate)] [style: '']\
                            \
                            ->                                              \
                            ->       options:                               \
                            ->                 B- bold                      \
                            ->                 U- underline                 \
                            ->                 H- highlight                 \
                            ->                 L- large                     \
                            ->                 S- small                     \
                            \
                            [] -> this feilds are optional                  \
                            [style:'display:flex, fontSize:20px']-> can directly pass css to it        \
        "
    },
    "\\defcolor":{
        name: "\\defcolor",
        syntax: "\\defcolor {colorname} (#000 formate)",
        commad: [],
        message: "This is a very basic commands create a color which can be accessed with color name to direcltly use colour and get rid of clomplexities of 6 digit numbers followed afer a '#' mark",
        options: "B(old)/U(nderline)/H(ighlight)/L(arge)/S(mall)",
        discription: "                  \
                            This is a very basic commands create a color which can be accessed with color name to direcltly use colour and get rid of clomplexities of 6 digit numbers followed afer a '#' mark                            \
                            \\defcolor {colorname} (#000 formate) \
        "
    }
};

let comNames = [
    '\\name',
    "\\defcolor"
    // '\\head1'
]


// priority deciders if you name a color nikhil and a font style nikhil too the colour will set to nikhi type but font will remain default
// we can conculd changing sequence of props array will change priorities of props
let props = [colors];

function ispresent(e, props){
    props.forEach((prop) => {
        // sub challenge how to call this prop
        prop.forEach((val) => {
            if(val === e){
                // console.log(e);
                console.log(e, " found in ", prop);
                return 1;
            }
        });
    })
    return 0;
}

function indPresent(s){
    // for(let i = 0;i < preDefinedCommands.length;i++){
        // console.log("indPresent called");
        let ans;
        comNames.forEach(e => {
            // console.log("dsdas")
            // console.log(s);
            // console.log(preDefinedCommands[e].name);
            // console.log(preDefinedCommands[e].name == s);
            if(preDefinedCommands[e].name == s){ans = preDefinedCommands[e].name;return ;console.log("sdcadss");}
        });
        // if(preDefinedCommands["\\name"].name === s){return i;}
    // }
    return ans || -1;
}

/// string to html to render as a div
/// this stor function works very very very well testings compleated for parsing separating commands and args and options
function stor(x, y){
    // console.log(x);
    // x is the command struct
    // y is users command to the programm
    // object to return 
    let z = {
        name: x.name,
        command: []
    };
    let com = '';
    for(let i = z.name.length;i < y.length;i++){
        if(y[i] == ' ' || y[i] == '[' || y[i] == '{' || y[i] == '(' || y[i] == ')' || y[i] == '}' || y[i] == ']'){
            if(com.trim() !== '')z.command.push(com);
            com = '';
            if(y[i] == '{' || y[i] =='(' || y[i] == '['){
                let till = invert(y[i]);
                // while(y[i] != till){

                
            }
        }
        else {
            com += y[i];
        }
    }
    z.command.push(com);
    console.log(z);
    // console.log("HIa");
    // z.commands.forEach((e) => {
    //     console.log(e);
    // })
    return z;
}


function consolTagsAndVals(data){
    let tags = [];
    let vals = [];
    // let count = 0;
    trimData = '';
    for(let i = 0;i < data.length;i++){
        if(data[i] == '%'){
            i++;
            while(i < data.length && data[i] != '\n'){
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
            while(i < data.length && ((data[i] >= 'A' && data[i] <= 'Z') || (data[i] >= 'a' && data[i] <= 'z') || (data[i] >= '0' && data[i] <= '9') || data[i] == ' ' || data[i] == '{' || data[i] == '}' || data[i] == '(' || data[i] == ')' || data[i] == '[' || data[i] == ']' || data[i] == ' ')){
                if(data[i] == '{'){
                    while(i < data.length && data[i] != '}'){
                        val += data[i];
                        i++;
                    }
                }if(data[i] == '('){
                    while(i < data.length && data[i] != ')'){
                        val += data[i];
                        i++;
                    }
                }if(data[i] == '['){
                    while(i < data.length && data[i] != ']'){
                        val += data[i];
                        i++;
                    }
                }
                if(data[i] == ' '){
                    while(i < data.length && data[i] == ' '){i++;}
                    // val+= ' ';
                    i--;
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
    // console.log(" ");
    // console.log(trimData);
    let trimedTags = [];
    let trimedVals = [];
    for(let i = 0;i < tags.length;i++){
        if(tags[i] == '\\'){}
        else{
            trimedTags.push(tags[i]);
            trimedVals.push(vals[i]);
        }   
    }
    // console.log("trimedTags : ");
    // console.log(trimedTags);
    // console.log(trimedVals);
    colors = [];
    for(let i = 0;i < trimedTags.length;i++){
        let j = indPresent(trimedTags[i]);
        // console.log("Intermidiate")
        // console.log(j);
        if(j != -1){ /// the second input is predefined tags not considered because no other option was there{needs a better eleboration for next vertion}
            // console.log("Hello world\n");
            // console.log(preDefinedCommands[j]);
            // console.log("STOR function testing");
            let commands = stor(preDefinedCommands[j], trimedVals[i]);
            if(j == '\\defcolor'){
                colors.push(commands);
            }
            // console.log("Hello World\n");
            // console.log(commands);
            for(let i = 0;i < commands["command"].length;i++){
                if(ispresent(commands["command"][i], props)){
                    
                }
                // subtask 1 def ispresent -> ongoing
                // subtask 2 def props -> done
            }
            // console.log(j)
            // console.log(" Hi commands")/
        }
    }
    // tags.forEach((e) => {if(e !== '\\'){count++;console.log(e)}})
        // console.log("No. of Tags: ",count);
    // vals.forEach((e) => {if(e.trim() !== ''){console.log(e)}})
    // console.log(" ");
}



setTimeout(() => {
    let debounceTimeout;
        document.getElementById("resumeCode").addEventListener('input', function(e) {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => {
                data = document.getElementById("resumeCode").innerHTML
                      .replace(/<div>/g, "\n")
                      .replace(/<\/div>/g, "")
                      .replace(/<br>/g, "\n")
                      .replace(/&nbsp;/g, " ")
                    //   .replace(/\s+/g, " ");
                consolTagsAndVals(data);
                // stor();
                // console.log(colors); -> displayed stored values it perfectly
            }, 1000);
        });
}, 200);








// challenges faced

// /// Test Cases
// %Resume\csd\c\sd\ds\\\sd
// \ds\cs\dc\sd\\\cscd\s\sd
// \name nikhil patidar
// \age 19
// \email{patidarnikhil687@gmail.com}(red)(3.2cm)









/// comented lines, tag lines colouring 
// {/* <p className="comment"></p> */}{using span instead of p has so tereable experiance it forced to not render whole modeule text area}
{/* <p className="tag"></p>*/}




// 14th march 9:46
/// here the newest of the errors started arrising :
    // first of all here on multiple spaces the tags started to break ie the values/args of tags were ignored 
    // solving that issue i got in a new one that it was now also removing the first spaces from here making parsing near to impossible
    // on solving here i am in a very unexpected error that is this tags should have been divided in twos and the second one should be ignore but in this case unfortunately they got merged with no reason still find this bug out and also trying new edge cases to test on with
    // also the multi space erro remains.

    // inputs                              outputs                              expected 
    // \name nikhil patidar      ->   \\name nikhil patidar        |      \\name nikhil patidar
    // \name nikhil \ patidar    ->   \\name nikhil \\ patidar     |      \\name nikhil
    // \name nikhil  patidar     ->   \\name nikhil                |      \\name nikhil patidar          
//                                    \\name nikhil &nbsp; patidar
//                                                  ^ => this '&' is the guilty

// 14th march 10:05
// //  data = document.getElementById("resumeCode").innerHTML
// .replace("&nbsp;", " ");
//  have tried this but it turned into very new and ... thing because it started ignoring one space in continuation but what;
//  yes on one, two space it outputs one, two space
// but on three spaces it outputs 2 spaces and 1 &nbsp; 
// again 4th space was skipped and now 2spaces followed by 1 &nbsp; and 1 space is outputed 
// and you gused it wright 2spaces 1 &nbsp; 1 space and 1 &nbsp; 



// 16th march 6:52
// the \n error is feels a dead end for now so undoing the debugging and continueing with &nbsp; to &amp;nbsp; error for version 1 of the programm
// now what
// 1 Clean Up Debugging Code – Remove yesterday’s \n debugging and ensure our parser is back to a stable state.
// 2️ this will do keep it for next time -> Enhance the Parser – Make it more robust and flexible, handling edge cases better (e.g., nested commands, unexpected inputs).
// 3️ Test the Full Pipeline – Ensure it correctly transforms text into structured resume content before we worry about the PDF part.
// 4️ Once the Parser is Rock-Solid, THEN Move to PDF – By this point, we’ll be dealing with clean, structured data, making PDF generation easier.

// test case 1                                                                                                  - > working for now atleast
// \name nikhil patidar      dasdddddd                                                                         
// \ok \\\sdcasdc %dssca\tagnew sdcao jih \\\tag \\ tag     \tag                                               
// \name nikhil    \\\\\patidaar                                                                               



// test case 2                                                                                                  - > working for now atleast
// \name nikhil patidar      sdc      d%cssd
// vsdfv\name tanay kumar sharma% cofounder
// \name ishika 
// \comments are Treated%perfectly
//  yep all working \\\\\\\\vss ok working too





// sdvacs\name nikhil


// test case 3                                                                                                  - > working for now atleast

// \name nikhil patidar
// \tanay kumar sharma %this is inline  comment
// % this is a pure comment 
// \\\\\\\this tag is special \name inline tags working 
// \name              ishika % multispacing issues dont fall in here


// Retesting confirmed moving on to error handling



// 17 march 4:17

// vals -> array of strings where each element is a string that is
// being parsed and contains tags with their args 
// and need further parsing to extract tags and args differently


/// 19 march 
// yesterday just learned the concepts of S-expressions and Qexpressiong today is the emplimantation day 
// not exactly S, Q expressiong because we are dealing complex so we will insert a object of array for every expressing to the main data set 
// for now we will take it to online data bases later words todays tasks 
// 1 segregating args or values of the tags and vreating structured s expressions 
// 2 start evaluation part though 
// 3 emplimenting variable of users wish  



///task complitioned 19 march 2:23
//  created variables and arrays of to stores colors parsing them storing them and checking if it exists
//  '\defcolor' command primilary testcase passed
//  keyword array created too.


//  further challenges we are for now only able to parse monoArgedCommand and are trying to parse multiArgedCommands
//  the following is how it works

//  -> \defcolor black #000 or \defcolor black (#000) are monoArgedCommands
//  -> \name {nikhil patidar} or \name nikhil (B, U, I) are multiArgedCommandsnikhil