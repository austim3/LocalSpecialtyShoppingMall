import {
    followURL,
    unFollowURL,
    getFollowURL
} from './URLConfig'

class FriendManager {

    async follow(userId){
        try {
            const follow={
                access_token:localStorage.access_token,
                userId
            }
            const res = await fetch(followURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(follow)
            });
            const result= res.json();

            return resule

            
        } catch (error) {
            return {
                success:false,
                errorMessage:'网络错误'
            }
        }
    }

    async getFollow(){
        try {
            const follow={
                access_token:localStorage.access_token,
            }
            const res = await fetch(getFollowURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(follow)
            });
            const result= res.json();

            return resule

            
        } catch (error) {
            return {
                success:false,
                errorMessage:'网络错误'
            }
        }
    }

    async unFollow(userId){
        try {
            const follow={
                access_token:localStorage.access_token,
                userId
            }
            const res = await fetch(unFollowURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(follow)
            });
            const result= res.json();

            return resule

            
        } catch (error) {
            return {
                success:false,
                errorMessage:'网络错误'
            }
        }
    }
}