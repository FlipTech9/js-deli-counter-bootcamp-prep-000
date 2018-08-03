function takeANumber (currentLine, name){
    currentLine.push(name)
    return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function nowServing (currentLine){
  if (!currentLine.length){
    return "There is nobody waitng to be served!"
  }
    return `Currently serving ${currentLine.shift()}.`
}





