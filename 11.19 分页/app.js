const http = require('http')
const url = require('url')
const querystring = require('querystring')
const vip = require('./list')
//每页内容
//下标
//每页内容
http.createServer((req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*')
	var json = url.parse(req.url,true).query
	var num = Number(json.num)
	var index = Number(json.index)
    var newarr = vip.slice(index*num,index*num+num)
	res.write(JSON.stringify(newarr))
	res.end()
}).listen(8000)
//多少页
//每页内容
http.createServer((req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*')
	var str =''
	req.on('data',(data)=>{
		str+=data
	})
	req.on('end',()=>{
		var json = querystring.parse(str)
		res.write(Math.ceil(vip.length/json.num).toString())
	    res.end()
	})
	
}).listen(8001)





