import React, {useState} from 'react'

export const User = ({name}) => {
    const [count] =useState(0);
    return (
        <div>
            <h2>Count: {count}</h2>
            <h2>Name: {name}</h2>
            <h3>Location: Nashik</h3>
        </div>
    )
}

export default User;