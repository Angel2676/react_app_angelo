import {User} from '../../types';
import {Card} from 'react-bootstrap';


type userCardProps={
    user:User;
}

export const UserCard = (p:userCardProps) => {

    const {user} = p;

    return(

        <Card style={{ width: '18rem', margin: "10px auto" }}>
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{user.job}</Card.Subtitle>
                <Card.Text>ID: {user.id}</Card.Text>
                <Card.Text>Creato il: {user.createdAt}</Card.Text>
            </Card.Body>
        </Card>

    );
}