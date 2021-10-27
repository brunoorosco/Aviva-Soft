import React from 'react'
import { useState } from 'react';

export default function MembrosTable(props) {
    console.log(props.children[1])
//    const { membros } = props;
    const [membros, setMembros] = useState([props.children[1].user[0]])
    return (
        <table>
            <caption>Membros</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>In Stock</th>
                </tr>
            </thead>
            <tbody>
                {membros.map((membros) => {
                    <tr key={membros.idmembros}>
                        <td>{membros.name}</td>
                        <td>teste</td>
                       
                    </tr>
                })}
                <pre>
                {/* {JSON.stringify(membros)} */}
                { membros.map((membros) => {
                    <p key={membros}> membros </p>
                })}
                </pre>
            </tbody>
        </table>
    );
}