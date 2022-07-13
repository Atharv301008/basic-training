var obj = {
    name: "varun",
    age: 22,
    address:{
        city: "patna",
        pin: 11234
    }
}

function flattenobj(obj){
    
    let result = {}
    for (i in obj){
        if(typeof obj[i] === 'object'){
            const temp=flattenobj(obj[i])
            for(j in temp){
                result[i+"-"+j] = temp[j]
            }
        }
        else{
            result[i]=obj[i]
        }
    }
}
