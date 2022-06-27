let ad =  document.getElementById("add");
let body = document.getElementById("body");
let count = 0

notes =[]

function display(){
    let note_count =document.querySelector('.note_count')
    let body =document.getElementById("body");
    let p = document.getElementById("p");
    bodyText= body.value

    if(bodyText != "" && count < 99){
        count++
        note_count.innerText =count
        notes.push(bodyText);

        const createbody = document.createElement('div')
        createbody.innerText = bodyText
        
        p.after(createbody)
        
        createbody.setAttribute('oncontextmenu','dismiss(this);return false;')
        createbody.setAttribute('onclick','dec(this)')
        body.value = "";
        
    }
}
function del(){
    let body =document.getElementById("body");
    body.value = ""
}
function dismiss(self){
    let note_count =document.querySelector('.note_count')
    
    for( var i = 0; i < notes.length; i++){ 
        if ( notes[i] === self.innerText) { 
            notes.splice(i, 1); 
        }
    }


    count--
    note_count.innerText = count

    self.remove()

}
function dec(self){
    self.style.textDecoration = 'line-through'

}
function notedelall(){
    notes.splice(0,notes.length)
    let note_count =document.querySelector('.note_count')
    const con = document.getElementById("containers2");

    while (con.hasChildNodes()) {
        con.removeChild(con.firstChild);
    }
    const createbody = document.createElement('p')
    con.appendChild(createbody)
    createbody.setAttribute('id','p')
    count = 0
    note_count.innerText = count
}
function saveFile(){
    var data = "" 
    for( var i = 0; i < notes.length; i++){ 
        index = i+1
        data +=  `\r\n`+ index + `.)`+notes[i]
    }

    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'Note.txt';	  

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}