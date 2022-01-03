const eyeColor = "Green / зелений";
console.log(eyeColor);


function showMessage(text, name) {
   return `${text}, ${name}`;
}

function showMessage(message) { console.log(message) }
function initMessage(text, name) {
   showMessage(createMessage(text, name));
}
initMessage('Hello', 'nigger');