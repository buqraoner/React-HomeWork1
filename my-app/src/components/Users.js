import { useEffect, useState } from 'react'
import axios from 'axios';


function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then((res) => setUsers(res.data))
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false));


    }, []);



    




    return (
        <div>

            <h1 className='baslik'>
                Users
            </h1>

            {isLoading && <div> Loading...</div>}

            <div className='container'>
                <ul>
                    {users.map((user) => (
                        <div key={user.id}>
                            <b>Name :</b>{user.name}<br/>
                            <b>Username :</b>{user.username}<br/>
                            <b>Phone : </b>{user.phone}<br/>
                            <b>Email :</b>{user.email}<br/><br/>                                    
                            <hr/>
                            
                            

                            
                        </div>

                    ))}
                </ul>
            </div>

        </div>


    );
}

export default Users