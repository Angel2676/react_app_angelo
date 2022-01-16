export type userList={
    id:number,
    email:string,
    first_name:string,
    last_name:string,
    avatar:string
}

export type userListResponse={
    page:number,
    per_page:number,
    total:number,
    total_pages:number,
    data:userList[]
}

export type startSagaPayload = {
    page: number
}


    

/*
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
        }
    ]
*/