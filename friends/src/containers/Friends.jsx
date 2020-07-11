import React,{useState,useEffect} from 'react';
import EditFriends from '../components/EditFriends';
import {axiosWithAuth} from '../utils/axiosWithAuth';

import {Container, Card, Button} from 'semantic-ui-react';

export default function Friends () {
    const [friendsArray,setFriendsArray] = useState([]);
    const [modal,setModal] = useState(false);

    
    const getData = () => {
        axiosWithAuth()
        .get("/friends")
        .then(res => {
            // console.log(res.data);
            setFriendsArray(res.data);
        })
        .catch(err => console.error(err));
    };

    const openModal = () => setModal( true);
    const closeModal = () => setModal(false);
    
    useEffect(()=>{
        getData();
    },[friendsArray])

    return (
        <Container className='friends_container'>
            <EditFriends modal={modal} closeModal={closeModal} getData={getData}/>
            <Button.Group>
                <Button icon='add' onClick={()=>openModal()} label='Add Friend' />
            </Button.Group>
            <Card.Group className='friends_group'>
                {friendsArray.map((bro)=>(
                    <Card
                        key={bro.id}
                        header={bro.name}
                        meta={`Age: ${bro.age}`}
                        description={`Email: ${bro.email} `}
                    />)
                )}
            </Card.Group>
        </Container>
    )
}