import React from 'react';
import './App.css';


export default function BookRow(props) {
    function showEdit() {
        document.getElementsByClassName('editContainer').style.visibility = "visible";
      }

    return <tr>
        <td>{props.bookName} </td>
        <td>{props.authorName} </td>
        <td>{props.published} </td>
        <td>{props.currency}. {props.price} </td>
        <td>
            <img style={{ height: '30px', cursor: 'pointer' }} src={props.icon} alt="edit icon" onClick={showEdit}/>
        </td>
    </tr>;
}



