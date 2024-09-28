
 const sentence="turning Visions into Reality"
 const sentenceContainer=document.getElementById("welcomeSentence")
 const words=sentence.split(" ") 
 function displaySentence(){
    words.forEach((word,index)=>{
        const span=document.createElement("span")
        span.className="sentence"
        span.textContent=word
        span.style.animationDelay=`${index*0.5}s`
        if(index==1){
            span.className="sentence text-primary"
        }
        if(index==3){
            span.className="sentence text-success"
  
        }
        span.style.marginRight="10px"
        sentenceContainer.appendChild(span)
    })
 }  
 window.onload=displaySentence() 

