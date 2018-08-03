function takeANumber (currentLine, name){
    currentLine.push(name)
    return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function currentLine(currentLine){
  if (!currentLine.length){
    return "The line is currently empty."
  }
  const lineNumberName = []
  for (let i = 0; 1 = currentLine.length; i < 1; i++){
    lineNumberName.push(`${i+1}. ${currentLine[i]}`)
  }
  return `The line is currently: ${lineNumberName.join(',  ')}`
}






