import React, {useState, useEffect} from 'react';
import './UserMoves.css';
import UserMovesEdit from './EditUserMoves'
import APIURL from '../../../helpers/enviroment';

const UserMoves = (props) => {
    const [updateActive, setUpdateActive] = useState(false)
    const [movesToUpdate, setMovesToUpdate] = useState({})

    const editUpdateMoves = (combo) => {
        setMovesToUpdate(combo)
        console.log(combo)
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    let handleArray = () => {
        let array = props.testData.moves
        let data = "";
        for(let i = 0; i < array.length; i++) {
            data = data + `${array[i]},`
        }
        return data
    }
    const [userMoves, setEditCharacter] = useState('')

    const deleteUserMoves = () => {
        fetch(`${APIURL}/moves/${props.testData.id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        }) .then(props.fetchUserMoves())
            .catch(err => console.log(err))
    }

    
    

    return(
        <tr>
            <td>{props.testData.id}</td>
            <td>{props.testData.character}</td>
            <td>{handleArray()}</td>
            <button onClick={() => deleteUserMoves()}>Delete</button>
            <button onClick={() => {editUpdateMoves(props.testData); updateOn()}}>Edit</button>
        </tr>
    )
}

export default UserMoves;