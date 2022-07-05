import { Iuser } from "../Interfaces/Iuser";

export class UserList 
{
    public static userList : Iuser[];

    private static _initialize = (() => {
        UserList.userList = [
            {
                userid: 1,
                firstname: "Akshay",
                lastname: "Kumar",
                username: "akumar",
                email:"akshay.kumar02@nagarro.com",
                password: "admin@123",
                isPrimeUser: false,
                watchLater:"",
                favourites:"",
                watched:"",
                isAdmin:false       
            },
            {
                userid: 2,
                firstname: "admin",
                lastname: "admin",
                username: "admin",
                email:"admin@nagarro.com",
                password: "admin",
                isPrimeUser: true,
                watchLater:"",
                favourites:"",
                watched:"",
                isAdmin:true       
            },
            {
                userid: 3,
                firstname: "PrimeUser",
                lastname: "PrimeUser",
                username: "PrimeUser",
                email:"PrimeUser@nagarro.com",
                password: "PrimeUser",
                isPrimeUser: true,
                watchLater:"",
                favourites:"",
                watched:"",
                isAdmin:false       
            },
            {
                userid: 4,
                firstname: "NonPrimeUser",
                lastname: "NonPrimeUser",
                username: "NonPrimeUser",
                email:"NonPrimeUser@nagarro.com",
                password: "NonPrimeUser",
                isPrimeUser: false,
                watchLater:"",
                favourites:"",
                watched:"",
                isAdmin:false       
            }
        ];
    })();
    constructor()
    {
        
    }
}