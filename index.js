function takeANumber (currentLine, newName) {
  currentLine.push(newName);
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine === 0) {
    return `There is nobody waiting to be served`
  }
  else 
  return `Currently serving ${katzDeliLine.unshift()}`; 
}