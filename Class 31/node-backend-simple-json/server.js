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

function apiHandler(res, params)
{
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
}

function wrongPage(res)
{
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

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  switch(page)
  {
    case '/':
      readWrite(res, 'index.html', 'text/html')
      break
    case '/otherpage':
      readWrite(res, 'otherpage.html', 'text/html')
      break
    case '/otherotherpage':
      readWrite(res, 'otherotherpage.html', 'text/html')
      break
    case '/css/style.css':
      readWrite(res, 'css/style.css', 'none', false)
      break
    case '/js/main.js':
      readWrite(res, 'js/main.js', 'text/javascript')
      break
    case '/api':
      apiHandler(res, params)
      break
    default:
      wrongPage(res)
      break
  }

});

server.listen(8000);
