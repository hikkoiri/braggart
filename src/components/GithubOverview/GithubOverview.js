import React from 'react';

import GithubProfileHeader from '../GithubProfileHeader';
import GithubPublicRepositories from '../GithubPublicRepositories';


const GithubOverview = ({ username }) => {




    return (
        <>
            <h1>
                Overview
            </h1>
            <GithubProfileHeader
                username={username}
            />
            <GithubPublicRepositories
                username={username}
            />
        </>
    )
}

export default GithubOverview;
