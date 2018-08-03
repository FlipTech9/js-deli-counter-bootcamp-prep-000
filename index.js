function takeANumber (currentLine, name){
    currentLine.push(name)
    return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function nowServing (currentLine){
  if (!currentLine.length){
    return `Currently serving ${currentLine.shift()}.`
  }
    return "There is nobody wating to be served!"
}

function currentLine(currentLine){
  if (!currentLine.length){
    return "The line is currently empty."
  }
  const lineNumberName = []
  for (let i = 0; i < currentLine.length; i++){
    lineNumberName.push(`${i+1}. ${currentLine[i]}`)
  }
  return `The line is currently: ${lineNumberName.join(',  ')}`
}

