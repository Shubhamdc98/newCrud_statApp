export class customer{

    constructor(id: number, name: string, email: string, phone: string){
        this.id = id;
        this.email = email;
        this.phone = phone;
        this.name = name;
    }
    id: number;
    name: string;
    email: string;
    phone: string;

}