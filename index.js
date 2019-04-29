var promise=fetch("https://fsd1.herokuapp.com/users/1/details");
promise.then(res=>res.json())
       .then(d=>updateDOM(d.data))
       .catch(error=>console.log(error))

var updateDOM=function(data){
	var username=document.querySelector('div.container1 h1')
	username.innerHTML=data.full_name;
    /*var userid=document.querySelector('div.container1 span')
	userid.innerHTML=data.id; */
	var tweets=document.querySelector('div.stats1 p')
	tweets.innerText=data.stats.tweets;
	var following=document.querySelector('div.stats2 p')
	following.innerHTML=data.stats.following;
    var followers=document.querySelector('div.stats3 p')
	followers.innerHTML=data.stats.followers;
	var location=document.querySelector('div.container2 .location')
	location.innerHTML=data.user_from;
	var email=document.querySelector('div.container3 span.email')
	email.innerHTML=data.user_email;
    var joindate=document.querySelector('div.container3 span.joindate')
    joindate.innerHTML=data.user_created_at;
    var birth=document.querySelector('div.container3 span.birth')
    birth.innerHTML=data.user_birthday;
    var sidebarUserName = document.querySelectorAll('b#user1')
  sidebarUserName.forEach(d=>d.textContent=data.user_name);
  var sidebarUserName = document.querySelectorAll('b#user2')
  sidebarUserName.forEach(d=>d.textContent=data.user_name);
  var sidebarUserName = document.querySelectorAll('b.user3')
  sidebarUserName.forEach(d=>d.textContent=data.user_name);
  var sidebarMailId = document.querySelectorAll('div.followusername span:nth-child(2)')
  sidebarMailId.forEach(d=>d.textContent=data.user_email);
  

}

var promise = fetch("https://fsd1.herokuapp.com/users/1/following/tweets");
promise.then(res=>res.json())
     .then(d=> tweets(d.data))
     .catch(error=>console.log(error))

var tweets = function(data){
  for (var i=0;i<=data.length;i++){
    document.querySelector('div.comment-body p').appendChild(document.createTextNode(data[i].text));
    document.querySelector('div#retweet span:nth-child(1)').appendChild(document.createTextNode(data[i].stats.retweets));
    document.querySelector('div.#comment span:nth-child(2)').appendChild(document.createTextNode(data[i].stats.comments));
    document.querySelector('div#likes span:nth-child(3)').appendChild(document.createTextNode(data[i].stats.likes));

  }
  
}


  	
  