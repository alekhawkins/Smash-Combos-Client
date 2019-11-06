import React, {useState, useEffect} from 'react';
import './UserMoves.css';
import APIURL from '../../../helpers/enviroment';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const UserMoves = (props) => {
    console.log(props)
    let handleArray = () => {
        if (props.testData.moves === "Moves"){
            return props.testData.moves
        } else {
        let array = props.testData.moves
        let data = "";
        for(let i = 0; i < array.length; i++) {
            data = data + ` ${array[i]}`
        }
        return data
    }
    }

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

    const useStyles = makeStyles(theme => ({
        margin: {
          margin: theme.spacing(1),
        },
        extendedIcon: {
          marginRight: theme.spacing(1),
        },
      }));
      
        const classes = useStyles();
    

    return(
    
    <div className='userMoves' style={{border: '1px solid black'}}>
        <tr style={{display: 'flex', justifyContent: 'space-around' }}>
            <td style={{minWidth: '12vw'}}>{props.testData.id}</td>
            <td style={{minWidth: '12vw'}}>{props.testData.character}</td>
            <td style={{maxWidth: '12vw'}}>{handleArray()}</td>
            { props.testData.id === "Id"
            ? <></>
            : <div>
                <IconButton onClick={() => deleteUserMoves()} aria-label="delete" className={classes.margin}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={() => {props.editUpdateMoves(props.testData); props.updateOn()}} aria-label="delete" className={classes.margin}>
                    <EditIcon fontSize="small" />
                </IconButton>
            </div>
            }
        </tr>
        
    </div>
    )
}

export default UserMoves;