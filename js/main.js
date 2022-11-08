const httpRequest = new XMLHttpRequest();


function reqListener(event) {
  console.log('onload:',event)
  console.log(httpRequest.response);
}

httpRequest.onload = reqListener;

httpRequest.onerror = (event) => {
  console.log('onerror:' , event);
}
httpRequest.onloadend = (event) => {
  console.log('onloadend',event);
}

httpRequest.onloadstart = (event) => {
  console.log('onloadstart',event);
}

httpRequest.onloadprogress = (event) => {
  console.log('onloadprogress',event);
}


httpRequest.onreadystatechange = (event) => {
    console.log('onreadystatechange' , event)
}

httpRequest.onreadytimeout = (event) => {
  console.log('onreadytimeout' , event)
}



httpRequest.open('GET','../text.txt' , true)
httpRequest.send()
