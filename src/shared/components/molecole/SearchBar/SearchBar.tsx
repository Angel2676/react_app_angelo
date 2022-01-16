import { Button, Input, CheckBoxComponent } from '../../atomi';
import { useState, useMemo, useEffect } from 'react';
import { callCreateUser, User, UserCard, ListUserCard, callUsersList, userListResponse, userList, startSagaLoaduserAction } from '../../../../user';
import { useUserFunctions, useStoreUsers } from "../../../../user";



const SearchBar = ()=>{

    const [name,setName] = useState("");
    const [job,setJob] = useState("");
    const [createdUser,setCreatedUser] = useState<User>();
    const [searchTxt,setSearchTxt] = useState("");
    // const [cardlist, setCardList] = useState<JSX.Element[]>();
    // const [users, setUsers] = useState<userList[]>([]); 
    const [filteredUsers, setFilteredUsers] = useState<userList[]>([]);
    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const { storeusers } = useStoreUsers();
    const { startSagaLoadUser } = useUserFunctions();

    const searchClick = async (output?:boolean)=> {

        let u:User={
            name:name,
            job:job
        }

       let cu = await callCreateUser(u);

        if(cu && cu.id) {
           setCreatedUser(cu);
           setName("");
           setJob("");
        }
    }

    useEffect(()=>{

        let filtered:userList[] = storeusers.filter((u)=>{
            if(u.first_name.toLowerCase().includes(searchTxt) || u.last_name.toLowerCase().includes(searchTxt.toLowerCase())) {
                return u;
            }
        });

        setFilteredUsers(filtered);

    },[searchTxt, storeusers])

    useEffect(()=>{

        if(currentPage) {
            startSagaLoadUser({page:currentPage});
        }
        
    },[currentPage])

    const listaUtentiClick = async ()=> {
        // console.log("RISPOSTA LISTA UTENTI", risposta)
    }

    const ListUserCards = useMemo(()=>{

        return filteredUsers.map ((u)=><ListUserCard key={u.id} user={u}/>)

    },[filteredUsers]);

    const PageButtons = useMemo(()=>{

        let buttons = [];

        for (let index=1; index <= pages; index++) {
            buttons.push(<Button primary={index===currentPage} className='px-3' key={index} click={()=>{setCurrentPage(index)}}>{index}</Button>)
        }

        return buttons;

    },[pages,currentPage]);
    

    const inputCheckChanged=(val:boolean)=>{
        
    }

    // const inputTextChanged=(val:string)=>{
    //     setTesto(val);
    // }

    return (
        <div>
            <label>Name</label>
            <Input value={name} textChanged={(val:string)=>{setName(val)}}/>

            <label>Job</label>
            <Input value={job} textChanged={(val:string)=>{setJob(val)}}/>

            <Button primary click={(output?:boolean)=>{searchClick(output)}}>Create User</Button>

            <CheckBoxComponent type="checkbox" checkChange={(val:boolean)=>{inputCheckChanged(val)}}/>
            <br />

            {createdUser? 
                <div>
                    <UserCard user= {createdUser}/>
                    <Button click={(output?:boolean)=>{setCreatedUser(undefined)}} >Reset Card</Button>
                </div> 
                : 
                <div>
                    In attesa di creazione 
                </div>
            }

            <div>
                <Input value={searchTxt} textChanged={(val:string)=>{setSearchTxt(val)}}/>
                <Button primary click={(output?:boolean)=>{setCurrentPage(1)}}>Search</Button>
            </div>
            <div className='d-flex'>
                {ListUserCards}
            </div>
            <div>
                {PageButtons}
            </div>
            
        </div>
    );
}

export {SearchBar};