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

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    readWrite(res, 'index.html', 'text/html')
  }
  else if (page == '/css/style.css'){
    readWrite(res, 'css/style.css', 'none', false)
  }else if (page == '/css/normalize.css'){
    readWrite(res, 'css/normalize.css', 'none', false)
  }else if (page == '/js/main.js'){
    readWrite(res, 'js/main.js', 'text/javascript')
  }else if (page == '/api'){
    if('flip' in params)
    {
      let hOrT = Math.floor(Math.random()*2)
      const objToJson = {
        flipped: hOrT ? 'Heads' : 'Tails'
      }
      sendJson(res, objToJson)
    }
  }else{
    console.log('page not found')
    }
  });

server.listen(8000);
