const fs = require('fs')

const inputFs = 'input.txt'

// 阻塞读取
console.log('readFileSync start!')
var data = fs.readFileSync(inputFs)
console.log('readFileSync data', data.toString())
console.log('readFileSync end!')
console.log('=================')

// 非阻塞读取
console.log('readFile start!')
fs.readFile(inputFs, function(err, data) {
  if (err) return console.error(err)
  console.log('readFile data', data.toString())
})
console.log('readFile end!')