var command = require('./command');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var dataArr = data.toString().split(" "); // remove the newline
  
  if(dataArr.length > 1) {
    var cmd = dataArr.shift();
    var arg = dataArr.join(" ").trim();
  }
  else {
    var cmd = data.toString().trim();
    var arg = "";
  }
  
  if(cmd === 'pwd'){
    command.pwd(arg);
  }
  if(cmd === 'date'){
    command.date(arg);
  }
  if(cmd === 'ls'){
    command.ls(arg);
  }
  if(cmd === 'echo'){
    command.echo(arg);
  }
  if(cmd === 'cat'){
    console.log('running cat function and passing: ', arg);
    command.cat(arg);
  }
  if(cmd === 'head'){
    command.head(arg);
  }
  if(cmd === 'tail'){
    command.tail(arg);
  }
  
  //for ls, this is running before ls
  process.stdout.write('\nprompt > ');

});