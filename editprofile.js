var Promise=["https://fsd1.herokuapp.com/users/1/details"],
 let request = Promise.map(url=>fetch(url));
 let store=[];
 Promise.all(request)
         .then(responses=>{
 	responses.forEach(response=>store.push(response.json()))
 })
 .catch(error=>console.log(error));
 function promisecall(url){
 	return fetch(url)
 	.then(response=>response.json())
 	.catch(error=>console.log(error));

 }
function tweeteddate(name){
	let month=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
	return `${month[name]}`;

}
var list=0;
promisecall(this.Promise[list])
        .then(data=>user_data(data.data));
function editProfile(event){
	event.preventDefault();
	let fullname=document.getElementById('full_name').value;
	let email=document.getElementById('email').value;
	let password=document.getElementById('password').value;
	let confirm_password=document.getElementById('confirm_password').value;
	let birthday=document.getElementsByTagName('birthday').value;
	let gender=document.getElementById('gender').value;
	let location=document.getElementById('location').value;
	let profie_pic=document.getElementById('profie_pic').value;
	let cover_pic=document.getElementById('cover_pic').value;
	let website=document.getElementById('website').value;

	let user={
		user_name:fullname,
		user_email:email,
		user_from:location,
		user_website:website,
		user_birthday:birthday
	};
	const init={
		method='PUT',
		body:JSON.stringify(user),
		headers:{
			'Content-Type':'application/json'
		}
	}
let promisecall=fetch("https://fsd1.herokuapp.com/users/1/details",init);
 promisecall.then(response=>response.json())
 .then(data=>{
 	if (user.user_name=data.user_name)&&(user.user_email=data.user_email)&&(user.user_from=data.user_from)&&(user.user_website==data.user_website)&&(user.birthday==data.user_birthday) {
 		document.getElementById("warningmessage").textContent="None";
 	}
 	else{
 		if(data.status!=sucess){
 			document.getElementById("warningmessage").textContent=data.message;

 		}
 		else{
 			document.getElementById("warningmessage").textContent=data.meassage;
 		}
 	}
 })
.catch(error=>console.log(error));