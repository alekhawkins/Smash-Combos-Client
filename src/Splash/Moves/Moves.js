import React, {useEffect, useState} from 'react'
import './Moves.css';
import UserMoves from './UserMoves/UserMoves';
import APIURL from '../../helpers/enviroment';
import UserMovesEdit from "./UserMoves/EditUserMoves"
import Characters from '../../assets/smashCharacters.jpeg'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const Moves = (props) => {

    const useStyles = makeStyles(theme => ({
        button: {
          margin: theme.spacing(1),
        },
        input: {
          display: 'none',
        },
      }));
      
        const classes = useStyles();


    let airMoves = ['Front air', 'Back Air', 'Up Air', 'Down Air', 'Neutral Air']
    let smashMoves = ['Side Smash', 'Up Smash', 'Down Smash']
    let specialMoves = ['Side special', 'Down special', 'Up special', 'Neutral special']
    let tiltMoves = ['Side tilt', 'Down tilt', 'Up tilt']
    let throwMoves = ['Forward throw', 'Back throw', 'Up throw', 'Down throw']
    let otherMoves = ['Jump', 'Shield', 'Grab', 'Jab', 'Dash attack']

    const [movesArr, setMovesArr] = useState([])
    const [character, setCharacter] = useState('')
    const [userMoves, setUserMoves] = useState([])
    const [updateActive, setUpdateActive] = useState(false)
    const [movesToUpdate, setMovesToUpdate] = useState({})

    console.log(movesArr)

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

    const handleClick = (e) => {
        setMovesArr([
            ...movesArr,
            e.target.value
        ])
        // console.log(movesArr)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const url = `${APIURL}/moves`
        
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({character: character, moves: movesArr}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => res.json())
        .then(() => {
            setMovesArr([])
            setCharacter('')
        })
    }
    
    // return [<UserMoves key={'column names'} testData={userMovesColumns} />].concat(
    const UserMovesRows = () => {
            return userMoves.map((movesInfo, index) => {
                return <UserMoves key={index} editUpdateMoves={editUpdateMoves} updateOn={updateOn} movesToUpdate={movesToUpdate} testData={movesInfo} token={props.token} fetchUserMoves={fetchUserMoves} />
            })
        }

    const fetchUserMoves = () =>{
        
    
        fetch(`${APIURL}/moves`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
            .then(res => res.json())
            .then(json => setUserMoves(json))
            .catch(err => console.log(err))
  }

  useEffect(() => {
      fetchUserMoves();
  }, [movesArr])
    

return (
    <div>
        <table className='userMovesTable'>
            <tbody>
                <tr style={{display: 'flex', justifyContent: 'space-around'}}>
                <th>id</th>
                <th>character</th>
                <th>moves</th>
                </tr>
                {UserMovesRows()}
            </tbody>
        </table>
        <form>
    <label>
        Character:
    </label>
        <input id="characterInput" type="text" name="charcter" value={character} onChange={(e) => setCharacter(e.target.value)} />
        <Button id="characterButton" variant="contained" type="submit" color="secondary" className={classes.button} onClick={(e) => handleSubmit(e)}>
        COMBO!
      </Button>
    </form>
    
    <table className="movesTable">
        <thead>
            <tr>
                <th>Air Moves:</th>
            </tr>
        </thead>
        <tbody className='Moves'>
            {
                airMoves.map((move, index) => {
                    return(
            
                            <tr key={index}>
                                <td>{move}</td>
                                <td>
                                    <button id="select" value={move} onClick={(e) => handleClick(e)}>Select</button>
                                </td>
                            </tr>
                    )
                        
    
                })
            }
        </tbody>
    </table>
    <table className="movesTable">
            <thead>
                <tr>
                    <th>Smash Moves:</th>
                </tr>
            </thead>
        <tbody className='Moves'>
            {
                smashMoves.map((move, index) => {
                    return(
            
                            <tr key={index}>
                                <td>{move}</td>
                                <td>
                                    <button id="select" value={move} onClick={(e) => handleClick(e)} >Select</button>
                                </td>
                            </tr>
                    )
                        
    
                })
            }
        </tbody>
        </table>
        <table className="movesTable">
            <thead>
                <tr>
                    <th>Special Moves:</th>
                </tr>
            </thead>
        <tbody className='Moves'>
            {
                specialMoves.map((move, index) => {
                    return(
            
                            <tr key={index}>
                                <td>{move}</td>
                                <td>
                                    <button id="select" value={move} onClick={(e) => handleClick(e)}>Select</button>
                                </td>
                            </tr>
                    )
                        
    
                })
            }
        </tbody>
        </table>
        <table className="movesTable">
            <thead>
                <tr>
                    <th>Tilt Moves:</th>
                </tr>
            </thead>
        <tbody className='Moves'>
            {
                tiltMoves.map((move, index) => {
                    return(
            
                            <tr key={index}>
                                <td>{move}</td>
                                <td>
                                    <button id="select" value={move} onClick={(e) => handleClick(e)}>Select</button>
                                </td>
                            </tr>
                    )
                        
    
                })
            }
        </tbody>
        </table>
        <table className="movesTable">
            <thead>
                <tr>
                    <th>Throw Moves:</th>
                </tr>
            </thead>
        <tbody className='Moves'>
            {
                throwMoves.map((move, index) => {
                    return(
            
                            <tr key={index}>
                                <td>{move}</td>
                                <td>
                                    <button id="select" value={move} onClick={(e) => handleClick(e)}>Select</button>
                                </td>
                            </tr>
                    )
                        
    
                })
            }
        </tbody>
        </table>
        <table className="movesTable">
            <thead>
                <tr>
                    <th>Other Moves:</th>
                </tr>
            </thead>
        <tbody className='Moves'>
            {
                otherMoves.map((move, index) => {
                    return(
            
                            <tr key={index}>
                                <td>{move}</td>
                                <td>
                                    <button id="select" value={move} onClick={(e) => handleClick(e)}>Select</button>
                                </td>
                            </tr>
                    )
                        
    
                })
            }
        </tbody>
    </table>
    <div>
       {
           movesArr.length > 0 ? (
               movesArr.map(move => {
                   return <div className="movesArr"><h4>{move}</h4></div>
               })
           ) : <div></div>
        //    ? <div className='movesArr'><h4> {movesArr} </h4></div>
        //    :  <div> </div>
        } 
    </div>
    <div>
    {updateActive ? <UserMovesEdit token={props.token} fetchUserMoves={fetchUserMoves} movesToUpdate={movesToUpdate} updateOff={updateOff} /> : <></>}
    </div>
    
</div>
)
    


}

export default Moves