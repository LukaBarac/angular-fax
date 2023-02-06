import { Injectable } from "@angular/core";

export interface User {
    id: number;
    email: string;
    password: string;
    date: Date;
    address?: string;
}

@Injectable()
export class UserService {

    currentUser: User = UserService.dummyUserList[0];

    static dummyUserList: Array<User> = [
        {
            id: 1,
            email: "korisnik@test.com",
            password: "korisnik",
            date: new Date("2022-05-26 15:00")
        },
        {
            id: 2,
            email: "moderator@test.com",
            password: "moderator",
            date: new Date("2022-05-26 14:00")
        }]
    getUserName(user: User) : string {
        return user.email;
    }

    getUserById(id: number) : User {
        /* dodaj ! kod definicje user / skip provere */
        var foundUser!: User;
        UserService.dummyUserList.forEach(user => {
            if(user.id == id) {
                foundUser = user;
            }
        });
        this.currentUser = foundUser;
        return foundUser;
    }

    getUser(userEmail: string) : User {
        //return UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!; 
       
        /* 
        uzvicnik na kraju i u iteraciji 1 (linija iznad) i u iteraciji 2 (kada se radi "Dodatak 2")
        eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        https://bobbyhadz.com/blog/typescript-type-undefined-is-not-assignable-to-type
        */

        this.currentUser = UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!;
        return this.currentUser;
    }

    isPasswordCorrect(userEmail: string, password: string): boolean {
        return UserService.dummyUserList.find(userToFind =>
            (userToFind.email == userEmail && userToFind.password == password)) != undefined;
            
    }

    registerUser(email: string, password: string, date: Date) : User {
        var maxId: number = 0;
        UserService.dummyUserList.forEach(user =>
            {
                if (maxId < user.id) {
                    maxId = user.id;
                }
            })

        var id = ++maxId
        var user: User = {id, email, password, date };

        UserService.dummyUserList.push(user);

        this.currentUser = user;
        console.log(user);
        return user;
    }
}