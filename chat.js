

function strt(){
    let msg=document.createElement('div');
    msg.innerHTML="Im Bot Uh, How can I help you????";
    msg.setAttribute("class","lef"); 
    document.getElementsByClassName("field").appendChild(msg); 
}


const a=document.getElementById("send");
a.onclick=async function(){
    let s=a.value;
    if(s==undefined || s==""){

    }
    else{
       let ans="";
       await axios.get(`https://api.monkedev.com/fun/chat?msg=${s}`).then(data => {
        ans=JSON.stringify(data.data.response)
       })
        let req=document.createElement('div');
        let res=document.createElement('div');
        let c1=document.createElement('div');
        let c2=document.createElement('div');
        c1.setAttribute("class","c1");
        c2.setAttribute("class","c2");
        req.innerHTML=s;
        res.innerHTMLans;
        req.setAttribute("class","rig");
        res.setAttribute("class","lef");
        let msg=document.getElementsByClassName("field");
        msg.appendChild(c1);
        msg.appendChild(c2);
        c1.appendChild(req);
        c2.appendChild(res);


         }

}