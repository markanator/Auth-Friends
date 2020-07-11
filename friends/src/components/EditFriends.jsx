import React,{ useState }  from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {Modal, Button, Icon, Form} from 'semantic-ui-react'

const EditFriends =({modal,closeModal,getData})=> {

    const [newFriend,setNewFriend] = useState({
        id: Date.now(),
        name: '',
        age: 0,
        email: '',
    })

    const handleChange = e =>{
        console.log(e.target.name)
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
            e.preventDefault();
            axiosWithAuth()
            .post("/friends",newFriend)
            .then(res => {
                console.log(res);
                // setFriendsArray(res.data);
                closeModal()
                getData()

            })
            .catch(err => console.error(err));
        
    };

        return (
            <Modal basic open={modal} onClose={closeModal}>
                <Modal.Header>Add a Friend!</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={handleSubmit}>
                        <Form.Input
                            label='Name:'
                            type='text'
                            placeholder="Name..."
                            name='name'
                            value={newFriend.name}
                            onChange={handleChange}
                            />
                        <Form.Input
                            label='Age:'
                            type='number'
                            placeholder="Age..."
                            name='age'
                            value={newFriend.age}
                            onChange={handleChange}
                            />
                        <Form.Input
                            label='Email:'
                            type='text'
                            placeholder="Email..."
                            name='email'
                            value={newFriend.email}
                            onChange={handleChange}
                            />

                <Modal.Actions>
                        <Button color='green' inverted type='submit' >
                            <Icon name='checkmark'/> Add
                        </Button>
                        <Button color='red' inverted onClick={()=>closeModal()}>
                            <Icon name='remove'/> Cancel
                        </Button>
                </Modal.Actions>
                    </Form>
                </Modal.Content>
            </Modal>

        )
    
}

export default EditFriends;