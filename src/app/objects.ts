export  interface customer{
    customerId : number;
    customerMail: string;
    customerName:string;
}
export class User{
    constructor(
        public userName:string,
        public userMail:string,
        public phoneNo:number,
        public topic:string,
        public timePreference:string,
        public subscription:boolean,
        public address:Address
    ){
        
    }  
}
export class Address{
    constructor(
        public locality:string,
        public city:string
    ){
    }
}