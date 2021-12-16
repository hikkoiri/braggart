import React, {
    useEffect,
    useState
} from 'react';

import { Timeline, Link, StyledOcticon } from '@primer/react'

import { GitCommitIcon } from "@primer/octicons-react"

const GithubPublicRepositories = ({ username }) => {

    const [publicRepositories, setPublicRepositories] = useState(undefined)

    useEffect(() => {
        async function fetchPublicRepositories() {
            if (publicRepositories === undefined) {
                const res = await fetch("https://api.github.com/users/" + username + "/repos")
                var jsonData = await res.json()
                setPublicRepositories(jsonData)
            }
        }
        fetchPublicRepositories()
    });

    return (
        <>
            {(publicRepositories !== undefined) &&
                <>
                    <Timeline>
                        <div style={{ marginLeft: "35px" }}>

                            {publicRepositories.sort(function (a, b) {
                                return b.created_at.localeCompare(a.created_at)
                            }).map((repo) => (
                                <Timeline.Item condensed>
                                    <Timeline.Badge>
                                        <StyledOcticon icon={GitCommitIcon} />
                                    </Timeline.Badge>
                                    <Timeline.Body>
                                        <Link href={repo.url} sx={{ fontWeight: 'bold', color: 'fg.default', mr: 1 }} muted>
                                            {repo.name}
                                        </Link>
                                        created at {new Date(repo.created_at).toLocaleDateString('de-DE')}
                                    </Timeline.Body>
                                </Timeline.Item>
                            ))}
                        </div>

                        {/* <Timeline.Break /> */}
                    </Timeline>
                </>
            }
        </>
    )
}

export default GithubPublicRepositories;
