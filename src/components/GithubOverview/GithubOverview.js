import React from 'react';

import GithubProfileHeader from '../GithubProfileHeader';
import GithubPublicRepositories from '../GithubPublicRepositories';

const GithubOverview = ({ username }) => {




    return (
        <div style={{ width: "500px", borderStyle: "solid", borderWidth: "2px", borderColor: "#d0d7de", marginBottom: "-16px" }}>
            <div style={{ margin: "10px 10px 0px 10px" }}>
                <GithubProfileHeader
                    username={username}
                />
                <GithubPublicRepositories
                    username={username}
                />
            </div>
        </div>
    )
}

export default GithubOverview;
