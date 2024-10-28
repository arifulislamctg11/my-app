import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    session: {
        strategy: 'jwt'
    },

    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: 'Email', type: 'text', required: true, value:'Sincere@april.biz', placeholder: "please enter email" },
                password: { label: 'Password', type: 'password', value:'password', required: true, placeholder: "please enter password" }
            },
            async authorize(credentials) {
                console.log('line 21 ',credentials)
                const {email, password} = credentials;

                if (!credentials) {
                    return null
                }
                // return true ; 
                if (email) {
                    const currentUser = users.find((user) => user.email === email)
                    console.log(currentUser);
                    if (currentUser) {
                        if (currentUser.password === password) {
                            return currentUser;
                        }
                    }
                }
                return null;
            }
        })

    ],
});

const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": "Kulas Light",
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": "Romaguera-Crona",
        "password" : "password"
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": "Victor Plains",
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": "Deckow-Crist",
        "password" : "password"

    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": "Douglas Extension",
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": "Romaguera-Jacobson",
        "password" : "password"
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": "Hoeger Mall",
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": "Robel-Corkery",
        "password" : "password"

    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": "Skiles Walks",
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": "Keebler LLC",
        "password" : "password"

    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": "Norberto Crossing",
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": "Considine-Lockman",
        "password" : "password"
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": "Rex Trail",
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": "Johns Group",
        "password" : "password"
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": "Ellsworth Summit",
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": "Abernathy Group",
        "password" : "password"

    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": "Dayna Park",
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": "Yost and Sons",
        "password" : "password"

    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": "Kattie Turnpike",
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": "Hoeger LLC",
        "password" : "password"
    }
]



export { handler as GET, handler as POST };