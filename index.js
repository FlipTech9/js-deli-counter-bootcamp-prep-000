function takeANumber (currentLine, name){
    currentLine.push(name)
    return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function currentLine(line) {
if (!line.length) {
return "The line is currently empty."
}
const numbersAndNames = []
for (let i = 0, l = line.length; i < l; i++) {
numbersAndNames.push(`${i + 1}. ${line[i]}`)
}
return `The line is currently: ${numbersAndNames.join(', ')}`

}






