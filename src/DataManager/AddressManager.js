import{


}from './URLConfig';

class AddressManager{

    async AddAddress(CustomerID,Addressee,Phone,City,Province,District,Detailedaddress){
        try {
            const fromData=new FormData();
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
    async UpdateAddress(CustomerID,Addressee,Phone,City,Province,District,Detailedaddress){
        try {
            const fromData=new FormData();
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
    async deleteAddress(ID){
        try{

        }catch(error){
            return{
                success:false,
                errorMessage:'网络错误'
            }
        }

    }
}
export default new FriendManager();