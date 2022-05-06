const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

function readWrite(res, page, pageType, hasType=true)
{
  try
  {
    fs.readFile(page,
      function(err, data)
      {
        if(hasType) res.writeHead(200, {'Content-Type': pageType});
        res.write(data);
        res.end();
      });
  }
  catch (e)
  {
    console.log("Error: " + e)
  }
}

function sendJson(res, object)
{
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(object));
}

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    readWrite(res, 'index.html', 'text/html')
  }
  else if (page == '/otherpage') {
    readWrite(res, 'otherpage.html', 'text/html')
  }
  else if (page == '/otherotherpage') {
    readWrite(res, 'otherotherpage.html', 'text/html')
  }
  else if (page == '/api') {
    if('student' in params){
      if(params['student']== 'leon'){
        const objToJson = {
          name: "leon",
          status: "Boss Man",
          currentOccupation: "Baller"
        }
        sendJson(res, objToJson)
      }//student = leon
      else if(params['student'] != 'leon'){
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown"
        }
        sendJson(res, objToJson)
      }//student != leon
    }//student if
  }//else if
  else if (page == '/css/style.css'){
    readWrite(res, 'css/style.css', 'none', false)
  }else if (page == '/js/main.js'){
    readWrite(res, 'js/main.js', 'text/javascript')
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
