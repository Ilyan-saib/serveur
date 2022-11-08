const httpRequest = new XMLHttpRequest();


function reqListener(event) {
  console.log('onload:', event)
  console.log(httpRequest.response);
}

httpRequest.onload = reqListener;

httpRequest.onerror = (event) => {
  console.log('onerror:', event);
}
httpRequest.onloadend = (event) => {
  console.log('onloadend', event);
}

httpRequest.onloadstart = (event) => {
  console.log('onloadstart', event);
}

httpRequest.onloadprogress = (event) => {
  console.log('onloadprogress', event);
}

httpRequest.onabort = (event) => {
  console.log("abord", event);
}

httpRequest.onreadystatechange = (event) => {
  console.log('onreadystatechange', event)
}

httpRequest.onreadytimeout = (event) => {
  console.log('onreadytimeout', event)
}

const bttn = document.getElementById('jajaja')
bttn.addEventListener('click', () => {
  httpRequest.open('GET', 'http://127.0.0.1:3000', true)
  httpRequest.send()
})

const btn = document.getElementById('ja')
btn.addEventListener('click', () => {
  httpRequest.abort()
})







