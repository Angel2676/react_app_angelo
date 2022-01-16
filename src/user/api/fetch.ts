import { API_URL } from "../../shared/const";
import axios, { AxiosResponse } from "axios";
import { User, userList, userListResponse } from '../types';

export const callCreateUser = async (u:User): Promise <User>=>{

    console.log("iniziata async");

        const callresult = await axios.post(`${API_URL}users`, u).then((r)=>{ // await ha bisogno di async per funzionare
                                                                            // Questo ci permette di rendere la chiamata asincrona
            console.log("andata bene la post");                           // Ovvero, prima di andare avanti dovrà finire la chiamata

            if(r.status==201) {
                return r.data;
            }
            else {
                return null;
            }
        })
        .catch((e)=>{
            throw e;
        });

    return callresult;

}

export const callUsersList = async (page:number): Promise<userListResponse> =>{

    const callresult = await axios.get(`${API_URL}users?page=${page}`).then((r)=>{                  

        if(r.status==200) {
            return r.data;
        }
        else {
            return null;
        }
    })
    .catch((e)=>{
        throw e;
    });

    return callresult;


}

// export {callCreateUser}; si può scrivere anche così basta non scrivere export a riga 5