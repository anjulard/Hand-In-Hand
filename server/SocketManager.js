const io = require('./index.js').io


const { VERIFY_USER, USER_CONNECTED, USER_DISCONNECTED, 
    LOGOUT, COMMUNITY_CHAT, MESSAGE_RECIEVED, MESSAGE_SENT,
    TYPING  } = require('../Events')

    const { createUser, createMessage, createChat } = require('../factories')


let connectedUsers = { }

module.exports = function(socket){
					
	
    console.log("Socket Id:" + socket.id);

    //Verify Username

    socket.on(VERIFY_USER, (nickname, callback)=>{
		if(isUser(connectedUsers, nickname)){
			callback({ isUser:true, user:null })
		}else{
            callback({ isUser:false, user:createUser({name:nickname})})
            console.log({ isUser:false, user:createUser({name:nickname})});
		}
	})
}


function addUser(userList, user){
	let newList = Object.assign({}, userList)
	newList[user.name] = user
	return newList
}


function removeUser(userList, username){
	let newList = Object.assign({}, userList)
	delete newList[username]
	return newList
}

function isUser(userList, username){
    return username in userList
}
