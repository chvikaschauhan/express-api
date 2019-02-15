var Redis =require('ioredis');
var redis=new Redis();


 const handler ={

     Setdata(key:number,value:string) {
         redis.set(key,value);
        
    },
    getdata(key:number):string {
        var result
        result=redis.get(key);
        return result
                
    }
    
    
     

 }
 export default handler;