/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Main from '../template/Main';

export default props =>
    <Main  icon='fa fa-home' title='Home'
    subtitle='React project'>
        <div className="display-4">
            Welcome!
        </div>
        <hr />
        <p className="mb-0">Register system in react.</p>
    </Main>