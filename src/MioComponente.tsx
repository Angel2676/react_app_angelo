import './MioComponente.css'

import {Row, Col} from 'react-bootstrap';

type mioComponenteParams = {
    label:string,
    cssclass?:string
}

const MioComponenente=( par: mioComponenteParams )=>{

    const {label, cssclass} = par;

return(
    <Row>
        <Col lg="12"><h1 id="divtitolo" className={cssclass?cssclass:"defaultclass"}>{label}</h1></Col>
    </Row>
);

}

export default MioComponenente;