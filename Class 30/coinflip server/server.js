const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');

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

function handleAPI(res, params)
{
  if('flip' in params)
  {
    let hOrT = Math.floor(Math.random()*2)
    const objToJson = {
      flipped: hOrT ? 'Heads' : 'Tails'
    }
    sendJson(res, objToJson)
  }
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
    case '/css/style.css':
      readWrite(res, 'css/style.css', 'none', false)
      break
    case '/css/normalize.css':
      readWrite(res, 'css/normalize.css', 'none', false)
      break
    case '/js/main.js':
      readWrite(res, 'js/main.js', 'text/javascript')
      break
    case '/api':
      handleAPI(res, params)
      break
    default:
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write("404 Page Not Found");
      res.end();
      break
  }
  });

server.listen(8000);
