import React, {useEffect, useState} from 'react'
import './Moves.css';
import UserMoves from './UserMoves/UserMoves';
import APIURL from '../../helpers/enviroment';



const Moves = (props) => {
    let airMoves = ['Front air', 'Back Air', 'Up Air', 'Down Air', 'Neutral Air']
    let smashMoves = ['Side Smash', 'Up Smash', 'Down Smash']
    let specialMoves = ['Side special', 'Down special', 'Up special', 'Neutral special']
    let tiltMoves = ['Side tilt', 'Down tilt', 'Up tilt']
    let throwMoves = ['Forward throw', 'Back throw', 'Up throw', 'Down throw']
    let otherMoves = ['Jump', 'Shield', 'Grab', 'Jab', 'Dash attack']

    const [movesArr, setMovesArr] = useState([])
    const [character, setCharacter] = useState('')
    const [userMoves, setUserMoves] = useState([])

    

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
   
    const UserMovesRows = () => {
        const userMovesColumns = {
            id: 'Id',
            character: 'Character',
            moves: 'Moves'
        }
        return [<UserMoves key={'column names'} testData={userMovesColumns} />].concat(
            userMoves.map((movesInfo, index) => {
                return <UserMoves key={index} testData={movesInfo} token={props.token} fetchUserMoves={fetchUserMoves} />
            })
            )
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
  }, [movesArr, userMoves])
    
//   const deleteUserMoves = (e) => {
//     e.preventDefault();
//     fetch(`http://localhost:3000/moves/${id}`,{
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': props.token
//         }
//     })
//     .then(res=> res.json())
//     .then(json => setMovesArr(movesArr, json))
//     .then(
//         setMovesArr([]),
//         setCharacter('')
//     )
//     .then(fetchUserMoves())
//     .catch(err => console.log(err))
// }
return (
    <div>
        <table>
            <tbody>
                {UserMovesRows()}
            </tbody>
        </table>
        <form>
    <label>
        Character:
    </label>
        <input type="text" name="charcter" value={character} onChange={(e) => setCharacter(e.target.value)} />
        <button type="submit" onClick={(e) => handleSubmit(e)} />
    </form>
    
    <table>
        <thead>
            <tr>
                <th>Air Moves:</th>
            </tr>
        </thead>
        <tbody>
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
    <table>
            <thead>
                <tr>
                    <th>Smash Moves:</th>
                </tr>
            </thead>
        <tbody>
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
        <table>
            <thead>
                <tr>
                    <th>Special Moves:</th>
                </tr>
            </thead>
        <tbody>
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
        <table>
            <thead>
                <tr>
                    <th>Tilt Moves:</th>
                </tr>
            </thead>
        <tbody>
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
        <table>
            <thead>
                <tr>
                    <th>Throw Moves:</th>
                </tr>
            </thead>
        <tbody>
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
        <table>
            <thead>
                <tr>
                    <th>Other Moves:</th>
                </tr>
            </thead>
        <tbody>
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
           movesArr.length > 0
           ? <div><h3> { movesArr } </h3></div>
           :  <div> </div>
        } 
    </div>
</div>
)
    


}

export default Moves