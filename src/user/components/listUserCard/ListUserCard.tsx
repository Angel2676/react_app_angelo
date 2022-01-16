import { Card } from 'react-bootstrap';
import { userList } from '../../types';

type ListUserCardProps = {
    user:userList;
}

export const ListUserCard= (p:ListUserCardProps)=>{

    return(
        <Card style={{ width: '18rem', margin: "10px auto" }}>
            <Card.Body>
                <Card.Img variant="top" src={p.user.avatar}/>
                <Card.Title>{p.user.first_name} {p.user.last_name}</Card.Title>
                <Card.Subtitle className="mb-2">Id: {p.user.id}</Card.Subtitle>
                <Card.Subtitle>{p.user.email}</Card.Subtitle>
            </Card.Body>
        </Card>
    );
}