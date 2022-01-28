import React, { useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Logout = () => { 

    const { push } = useHistory();

    useEffect(() => {
        axiosWithAuth().post(`logout`, {})
            .then(res => {
                localStorage.removeItem('Token');
                localStorage.removeItem('Username');    
                localStorage.removeItem('Role');
                push('/');
            })
            .catch(err => {
                console.error(err)
            })
    }, [])       
    return(<div></div>);
}

export default Logout;