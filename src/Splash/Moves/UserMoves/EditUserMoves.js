import React, {useState} from 'react'
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'react'
import APIURL from '../../../helpers/enviroment';


const UserMovesEdit = (props) => {
    const [editMoves, setEditMoves] = useState(props.movesToUpdate.moves)
    const [editCharacter, setEditCharacter] = useState(props.movesToUpdate.character)

    const movesUpdate = (event, combo) => {
       event.preventDefault();
       fetch(`${APIURL}/moves/${props.movesToUpdate.id}`, {
           method: 'PUT',
           body: JSON.stringify(
               {character: editCharacter, moves: editMoves}
           ),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
       }) .then((res) => {
           props.fetchUserMoves();
           props.updateOff();
       })
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader>Log a Combo</ModalHeader>
            <ModalBody>
                <Form onSubmit={movesUpdate}>
                    <FormGroup>
                        <Label htmlFor='character'>Edit Character:</Label>
                        <Input name='character' value={editCharacter} onChange={(e) => setEditCharacter(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='moves'>Edit Moves:</Label>
                        <Input name='moves' value={editMoves} onChange={(e) => setEditMoves(e.target.value)} />
                    </FormGroup>
                    <Button type='submit'>Update the Combo!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default UserMovesEdit;