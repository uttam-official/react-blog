import {useHistory} from 'react-router-dom';
import { useEffect } from 'react';

export default function Logout(){
	const history=useHistory();
    useEffect(() => {        
        const logOut=() => {
            if (localStorage.getItem('userInfo')) {
            	localStorage.removeItem('userInfo');
                history.push('/login');
            }else{
                history.push('/login');
            }
        }
        logOut();
    }, [history])
    return (
    	<></>
    );
}