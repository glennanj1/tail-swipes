import React from 'react'


export default class Owners extends React.Component{
    
    render() {
        return(
            <div>
                <h1>Tail Swipes</h1>
                <h2>Dog Owner Table:</h2>
                <table>
                    <th> Dogs
                        <tr>Oz</tr>
                        <tr>Licoln</tr>
                        <tr>Rocco</tr>
                        <tr>Dunkin</tr>
                    </th>
                    <th>Owners
                        <tr>John</tr>
                        <tr>Brian</tr>
                        <tr>Parents</tr>
                        <tr>Dangelos</tr>
        
                    </th>
                </table>
            </div>
        )
    }
}