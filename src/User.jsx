import React from 'react';
const User = (props) => {
    console.log(props)
    const {data}= props
    return (
        <>
            <h1> Name: {data.name}</h1>
            <h1>Age: {data.age}</h1>
        </>
    )
}
export default User;