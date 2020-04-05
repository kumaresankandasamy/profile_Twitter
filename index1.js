var promiselist=["https://fsd1.herokuapp.com/users/1/details",
                 "https://fsd1.herokuapp.com/users/1/following/tweets",
                 "https://fsd1.herokuapp.com/users/1/followers/suggestions",
                 "https://fsd1.herokuapp.com/users/1/tweets",
                 "https://fsd1.herokuapp.com/users/1/following",
                 "https://fsd1.herokuapp.com/users/1/followers"];

let requests= promiselist.map(url=>fetch(url));
let store=[];
Promise.all(requests)
       .then(responses=>{
       	responses.forEach(response=>store.push(response.json()))
       })
       .catch(error=>console.log(error));
let PromiseCall=((url)=>{

	return fetch(url)
	.then(response=>response.json())
	.catch(error=>console.log(error));

//async and await function thenable

async function(){
	let randomobj=await promiselist;
	console.log(`${randomobj}`);

}();
const getRandomAsync = async () => {
    try {
        return await getRandomPromise();
    } catch(error) {
        return error;
    }
}

});
let Tweetdate=((month)=>{
	let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]; 	
		return `${monthNames[month]}`;
});
let list=0;
PromiseCall(this.promiselist[list])
 .then(data=>updateDOM(data.data));
 .catch(error=>console.log(error));
 let updateDOM=((data)=>{
	let username=document.querySelector('div.container1 h1')
	username.innerHTML=data.full_name;
    let tweets=document.querySelector('div.stats1 p')
	tweets.innerText=data.stats.tweets;
	let following=document.querySelector('div.stats2 p')
	following.innerHTML=data.stats.following;
    let followers=document.querySelector('div.stats3 p')
	followers.innerHTML=data.stats.followers;
	let location=document.querySelector('div.container2 .location')
	location.innerHTML=data.user_from;
	let email=document.querySelector('div.container3 span.email')
	email.innerHTML=data.user_email;
    let joindate=document.querySelector('div.container3 span.joindate')
    joindate.innerHTML=data.user_created_at;

    let birthday=new Date(data.user_birthday);
        document.querySelector('div.container3 span.birth')
        .textContent=`Born ${TweetDate(birthday.getMonth())} ${birthday.getDate()}, ${birthday.getFullYear()}`;

    let sidebarUserName = document.querySelectorAll('b#user1')
    sidebarUserName.forEach(d=>d.textContent=data.user_name);
    let sidebarUserName = document.querySelectorAll('b#user2')
    sidebarUserName.forEach(d=>d.textContent=data.user_name);
    let sidebarUserName = document.querySelectorAll('b.user3')
    sidebarUserName.forEach(d=>d.textContent=data.user_name);
    let sidebarMailId = document.querySelectorAll('div.followusername span:nth-child(2)')
    sidebarMailId.forEach(d=>d.textContent=data.user_email);
  
});

PromiseCall(this.promiseList[++list])
 .then(d=>tweets(d.data))
 .catch(error=>console.log(error))

var tweets = ((data)=>{
  for (var i=0;i<=data.length;i++){
  	[].forEach.call(data,()=>{
    document.querySelector('div.comment-body p').appendChild(document.createTextNode(data[i].text));
    document.querySelector('div#retweet span:nth-child(1)').appendChild(document.createTextNode(data[i].stats.retweets));
    document.querySelector('div.#comment span:nth-child(2)').appendChild(document.createTextNode(data[i].stats.comments));
    document.querySelector('div#likes span:nth-child(3)').appendChild(document.createTextNode(data[i].stats.likes));

}
}
});
PromiseCall(this.promiseList[++list])
 .then(d=>follower_suggestion(d.data))
 .catch(error=>console.log(error))

let follower_suggestion=((data)=>{
	[].forEach.call(data,()=> {
		let usernamelist=document.querySelectorAll('div.followusername');
		for(let i = 0; i < usernameList.length && i<3 ; i++) {
		usernameList[i].innerHTML = data[0].user_name;

		let divfollowuserimg=document.createElement("div");
		divfollowerimg.classname="followuserimg";
		mid.appendChild("divfollowuserimg")
		divfollowuserimg.appendChild(document.createElement("img"));
		let followuserimg=document.querySelectorAll("followerimg > img");
		followerimg[i].src=data[i].(profile_img);

		let button = document.createElement("followbutton");
		button.classname="followbutton";
		div.appendChild("followbutton");
		button.innerHTML="Follow";
    }
  })
});

PromiseCall(this.promiseList[++list])
 .then(d=>following_data(d.data))
 .catch(error=>console.log(error));

let following_data=((data) => {
	[].forEach.call(data => {
		let main=document.createElement("div");
		main.classname="mybox1";
		document.querySelector("div.profile-box").appendChild(main);
    })
    let parent=document.querySelectorAll("div.mybox1");
    [].forEach.call(data=>{
    	let profile_img=document.createElement("div.profile-box img");

    	profile_img.src=data[i].every(profile_img);
    })
});



  	
  

