import React, { useState, useEffect } from 'react';

const TestAPI = () => {
    const [repos, setRepos] = useState([{}]);
    useEffect(() => {

        async function getRepos() {
            const response = await fetch('https://api.github.com/users/AhmedShaykh/repos');
            const data = await response.json();
            console.log(data)
            setRepos(data)
        }
        getRepos();
    }, [])

    return (
        <div className='App'>
            <h1>
                My Github Repos
            </h1>
            <ol>
                {repos.map((repoObj, index) => {
                    return (
                        <h3>
                            <li key={repos.index}>{repoObj.name}</li>
                        </h3>
                    )
                })}
            </ol>
        </div>
    )
}

export default TestAPI;