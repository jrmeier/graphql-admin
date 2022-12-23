import React, { useState } from 'react'
import { getSchema } from '../../gql'

export const Settings = () => {
    const [graphqlUrl, setGraphqlUrl] = useState<string>('')

    const handleButtonClick = () => {
        console.log('fetching the schema')
        getSchema()
        .then(response => {
            console.log('response', response.data)
        }
            )
    }
    
    return (
        <div>
            <input type="text" value={graphqlUrl} onChange={e => setGraphqlUrl(e.target.value)} />
            <button onClick={handleButtonClick}>Fetch schema</button>
        </div>
    )
}