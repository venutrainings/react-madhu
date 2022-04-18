const fetchEl= document.getElementById('post')
const delEl= document.getElementById('delete')
const tableEl = document.getElementById("table")

function getData(){
		var data = new XMLHttpRequest()
		data.open('get','https://gorest.co.in/public/v2/users',true)
		data.send()
		data.onload= function (){
			var result1 = data.responseText
			var result = JSON.parse(result1)
			
			displayResult(result)		
		}
		data.onerror = function () {
			console.log("something went Wrong")
		}	
		}

const fetchData = () =>{
	var data= new XMLHttpRequest()
	data.open('post','https://gorest.co.in/public/v2/users',true)
	data.setRequestHeader("Content-type","application/x-www-form-urlencoded")	
	data.setRequestHeader("Authorization","Bearer e5b4e2de8f634949d71ddc71e29bd0e8bb8a66363dd60f2526d85db5c7d2060e")
	data.onload= function (){
		console.log(this.responseText)
	}
	data.getreadystatechange= function(){
		if (readyState==4 & this.status==200){
			document.getElementById("post").innerHtml= this.responseText
		}
	}
	data.send("name=mahendar&email=mahendarasd12@gmail.com&gender=male&status=active")	
}

const delData = () =>{
	var data = new XMLHttpRequest()
	data.open('delete','https://gorest.co.in/public/v2/users/4392',true)
	
	data.setRequestHeader('Content-type','application/x-www-form-urlencoded')
	data.setRequestHeader("Authorization","Bearer e5b4e2de8f634949d71ddc71e29bd0e8bb8a66363dd60f2526d85db5c7d2060e")
	data.onload = function (){
		var users = JSON.parse(data.responseText)
		if (data.readyState == 4 && data.status== "200" ){
			console.table(users)
			console.log("Deleted the Record Successfully")
		}else{
			console.error(users)
		}
	}
	
	data.send(null)
}

const displayResult=(res)=>{
			for (let each of res){				
				
				console.log(each)
			}
		}


const putData = () =>{
	var data1 ={}
	data1.name="SaiChandraDev"
	data1.email="lakjsdf@gamil.com"
	data1.gender='female'
	data1.status='inactive'
	var finalData = JSON.stringify(data1)
	console.log(finalData)
	var data = new XMLHttpRequest()
	data.open('put','https://gorest.co.in/public/v2/users/4579',true)
	data.setRequestHeader('Content-type','/application/json ; charset=utf-8')
	data.setRequestHeader("Authorization","Bearer e5b4e2de8f634949d71ddc71e29bd0e8bb8a66363dd60f2526d85db5c7d2060e")
	data.onload = function (){
		var users= JSON.parse(data.responseText)
		if (data.readyState == 4 && data.status == '200'){
			console.table(users)
		}else{
			console.error(users)
		}
	}
	data.send(finalData)
}