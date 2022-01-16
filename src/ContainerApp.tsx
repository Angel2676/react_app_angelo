import './ContainerApp.css';
import Header from './Header';

import {Container} from 'react-bootstrap';

type ContainerParams = {
    cssclass?:string
}

const ContainerApp=( par: ContainerParams )=>{

const {cssclass} = par;

return(
    <div className={cssclass}>
        <Header/>
    </div>    
);

}

export default ContainerApp;