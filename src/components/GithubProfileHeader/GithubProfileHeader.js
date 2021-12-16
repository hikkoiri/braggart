import React, {
    useEffect,
    useState
} from 'react';

const GithubProfileHeader = ({ username }) => {

    const [profileInformation, setProfileInformation] = useState(undefined)

    useEffect(() => {
        async function fetchProfileInformation() {
            if (profileInformation === undefined) {
                console.log(username)
                const res = await fetch("https://api.github.com/users/" + username)
                var jsonData = await res.json()
                setProfileInformation(jsonData)
            }
        }
        fetchProfileInformation()
    });

    return (
        <>
            <h3>
                ProfileHeader
            </h3>

            {(profileInformation !== undefined) &&
                <p>
                    <img src={profileInformation.avatar_url} alt="" />
                    <br />
                    Username: {profileInformation.login}
                    <br />
                    Name : {profileInformation.name}
                </p>
            }
        </>
    )
}

export default GithubProfileHeader;
