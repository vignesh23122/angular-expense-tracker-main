
export class AppConstants{
    public static ENDPOINT='https://protected-brushlands-17079.herokuapp.com';
    public static EXPENSE_CATEGORIES=['Clothing','Entertainment','Food','Fuel','Health','Salary','Misc'];
    public static token: string|null=null;

    static getToken(){
        if(this.token===null){
            this.token=localStorage.getItem('token');
        }
        return this.token;
    }

    static setToken(token:string){
        localStorage.setItem('token',token);
    }
}