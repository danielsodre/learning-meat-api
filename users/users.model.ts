const users = [{
    id: '1',
    name: 'Daniel',
    email: 'daniel.sodre@pixter.com.br'
},
{   
    id: '2',
    name:'Julia',
    email: 'julia.mass@gmail.com'
}]

export class User {
    
    static findAll(): Promise <any[]> {
        return Promise.resolve(users)
    }
    
    static findById(id: string) : Promise <any> {
        return new Promise(resolve => {
            const filtered = users.filter(user => user.id === id)
            let user = undefined

            if(filtered.length > 0) {
                user = filtered[0]
            }
            resolve(user)
        })
    } 
}