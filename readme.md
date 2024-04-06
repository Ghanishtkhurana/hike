schema 
 -- user 
    full_name
    username
    gender
    profile_pic
    password
    
 -- conversation 
    _id : mongo_id ,
    participants_id : [id1,id2] ,
    messsage : [allmessage_mongo_id]

-- message 
    _id : mongo_id ,
    senderId : mongo_senderid ,
    receiverId : mongo_receiverId,
    message : text_msg