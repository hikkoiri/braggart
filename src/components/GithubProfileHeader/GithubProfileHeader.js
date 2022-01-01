import React, {
    useEffect,
    useState
} from 'react';

import { Avatar, Text, Heading, Link } from '@primer/react'

const GithubProfileHeader = ({ username }) => {

    const [profileInformation, setProfileInformation] = useState(undefined)

    useEffect(() => {
        async function fetchProfileInformation() {
            if (profileInformation === undefined) {
                const res = await fetch("https://api.github.com/users/" + username)
                var jsonData = await res.json()
                console.log(jsonData)
                setProfileInformation(jsonData)
            }
        }
        fetchProfileInformation()
    });

    return (
        <>
            {(profileInformation !== undefined) &&
                <>

                    <table>
                        <tbody>
                            <tr>
                                <td style={{ padding: "0" }}>
                                    <Avatar src={profileInformation.avatar_url} size="100px" />
                                </td>
                                <td style={{ verticalAlign: "center", padding: "0", paddingLeft: "20px" }}>
                                    <Heading >
                                        <Link href={profileInformation.html_url} sx={{ fontWeight: 'bold', color: 'fg.default', mr: 1 }} muted>
                                            {profileInformation.login}
                                        </Link>
                                    </Heading>
                                    <Text as="p" style={{ margin: "0 0 0 0" }}>
                                        {profileInformation.name}
                                    </Text>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>


            }
        </>
    )
}

export default GithubProfileHeader;
