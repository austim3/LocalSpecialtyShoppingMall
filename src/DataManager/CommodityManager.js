import {
    commodityTypeURL
} from './URLConfig'

class CommodityManager{
    async commodityType(userId){
          try{
             const follow={          
                    access_token:localStorage.access_token,
                    userId
             }
             const res=await fetch(commodityTypeURL,{
                 method:'GET',
                 headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                 },
                 body:JSON.stringify(follow)          
             });
             const result=res.json;
             return result;
          }catch(error){
              return{
                success:false,
                errorMessage:'网络错误'
              }
          }
    }
   
}
 