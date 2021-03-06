import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
if( navigator.userAgent.toLowerCase().indexOf('chrome') > -1){
    // Google chrome
 }

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => console.log(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1> 

            <ul> 
              {repositories.map(repository => {
                  return <RepositoryItem repository={repository} />
              }
                )}
            </ul>
        </section>
    );
}