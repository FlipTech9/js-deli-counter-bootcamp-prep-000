function takeANumber (currentLine, name){
    currentLine.push(name)
    return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function nowServing (currentLine){
  if (!currentLine.length){
    return "There is nobody wating to be served!"
  }
    return `Currently serving ${currentLine.shift()}.`
}

function currentLine(line){
  if (!line.length){
    return "The line is currently empty."
  }
  const lineNumberName = []
  for (let i = 0; i < line.length; i++){
    lineNumberName.push(`${i+1}. ${line[i]}`)
  }
  return `The line is currently: ${lineNumberName.join(',  ')}`
}