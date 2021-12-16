import React, {
    useEffect,
    useState
} from 'react';

const GithubPublicRepositories = ({ username }) => {

    const [publicRepositories, setPublicRepositories] = useState(undefined)

    useEffect(() => {
        async function fetchPublicRepositories() {
            if (publicRepositories === undefined) {
                console.log(username)
                const res = await fetch("https://api.github.com/users/" + username + "/repos")
                var jsonData = await res.json()
                setPublicRepositories(jsonData)
            }
        }
        fetchPublicRepositories()
    });

    return (
        <>
            <h3>
                PublicRepositories
            </h3>

            {(publicRepositories !== undefined) &&
                <>
                    {publicRepositories.map((repo) => (
                        <p>
                            Name: {repo.name} , URL: {repo.url}, Description: {repo.description}
                        </p>
                    ))}
                </>
            }




        </>
    )
}

export default GithubPublicRepositories;
