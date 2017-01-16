var fs = require('fs');

module.exports = {
  
  pwd: function(arg){
    var path = process.cwd();
    process.stdout.write(path);
  },
  
  date: function(arg){
    process.stdout.write(new Date().toString());
  },
  
  ls: function(arg){
    fs.readdir('.', function(err, files){
      if(err) throw err;
      files.forEach(function(file){
        process.stdout.write(file.toString() + "\n");              
      })
    })
   },
  
  cat: function(arg){
    fs.readFile(arg, "utf8", function(err, data){
      if(err) throw err;
      console.log(data);
    });    
  },
  
  head: function(arg){
    fs.readFile(arg, "utf8", function(err, data){
      if(err) throw err;
      var lines = data.split("\n");
      var returnLines = lines.slice(0,5).join("\n");
      console.log(returnLines);
    });
  },
  tail: function(arg){
    fs.readFile(arg, "utf8", function(err, data){
      if(err) throw err;
      var lines = data.split("\n");
      var returnLines = lines.slice(lines.length - 6).join("\n");
      console.log(returnLines);
    });  
  },
  
  
  echo: function(arg){
    process.stdout.write(arg);
  }
}
