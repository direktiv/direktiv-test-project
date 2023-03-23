//Body example: 
if (event["source"] == "drop"){
    return null
 }else{
    event["source"] = "newSource"
    return event
 }