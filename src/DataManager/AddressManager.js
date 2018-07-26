import{


}from './URLConfig';

class AddressManager{

    async AddAddress(CustomerID,Addressee,Phone,City,Province,District,Detailedaddress){
        try {
            const fromData=new FormData();
            const Uid=localStorage.Uid;
            const token =localStorage.token;
            fromData.append('CustomerID',CustomerID);
            fromData.append('Addressee',Addressee);
            fromData.append('Phone',Phone);
            fromData.append('City',City);
            fromData.append('Province',Province);
            fromData.append('District',District);
            fromData.append('Detailedaddress',Detailedaddress);

            const res=await fetch(AddressUrl,{
                method:'POST',
                body:fromData,
            })
            return res.json;

        } catch (error) {
            return {
                success:false,
                errorMessage:'网络错误'
            }
        }

    }
    async UpdateAddress(userInfo){
        try {
            const token =localStorage.token;
            const Uid=localStorage.Uid;
            const fromData=new FormData();
            fromData.append('token',token);
            if(userInfo.CustomerID){
                fromData.append('CustomerID',userInfo.CustomerID);
            }
            if(userInfo.Addressee){
                fromData.append('Addressee',userInfo.Addressee);
            }
            if(userInfo.Phone){
                fromData.append('Phone',userInfo.Phone);
            }
            if(userInfo.City){
                fromData.append('City',userInfo.City);
            }
            if (userInfo.Province) {
                fromData.append('Province',userInfo.Province);
            }
            if (userInfo.District) {
                fromData.append('District',userInfo.District);
            }
            if (userInfo.Detailedaddress) {
                fromData.append('Detailedaddress',userInfo.Detailedaddress);
            }

            const res=await fetch(Get,{
                method:'POST',
                body:fromData,
            })
            return res.json;

        } catch (error) {
            return {
                success:false,
                errorMessage:'网络错误'
            }
        }

    }
    async deleteAddress(ID){
        try{
            const token=localStorage.token;
            const Uid=localStorage.Uid;
            const res=await fetch(deleteAddressUrl,{
                token,
                Uid,
                ID
            })
            return res.data;

        }catch(error){
            return{
                success:false,
                errorMessage:'网络错误'
            }
        }

    }
    async getAddress(){
        try {
            const token =localStorage.token;
            const Uid=localStorage.Uid;
            const res=await fetch(Get,{
                token,
                Uid
            })
            return res.data;
        } catch (error) {
            return {
                success:false,
                errorMessage:'网络错误'
            }
        }
    }
}
export default new FriendManager();