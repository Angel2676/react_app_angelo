import './Header.css';
import NavLink from './NavLink';
import ButtonProva from './ButtonProva';
import { useMemo } from 'react';
import { Button, StyledButton, Link, StyledLink } from './shared/components';


import {Row, Col, Container} from 'react-bootstrap';


type HeaderParams = {
    cssclass?:string,
}

type menuItem={
    label:string,
    url:string,
}

const vociMenu:menuItem[]=[];

let home:menuItem = {
    label:"Home",
    url:"/home",
}
let pages:menuItem = {
    label:"Pages",
    url:"/pages",
}
let blog:menuItem = {
    label:"Blog",
    url:"/blog",
}
let about:menuItem = {
    label:"About",
    url:"/about",
}
let contact:menuItem = {
    label:"Contact",
    url:"/contact",
}

vociMenu.push(home);
vociMenu.push(pages);
vociMenu.push(blog);
vociMenu.push(about);
vociMenu.push(contact);

const Header=( par: HeaderParams )=>{

const {cssclass} = par;

// const vociMenu = ["Home", "Pages", "Blog", "About", "Contact"];

const menu = vociMenu.map((x)=> {
    return <NavLink label={x.label} url={x.url}></NavLink>
});

const Menueffect = useMemo(()=>{
    return menu;
},[menu]);

return(
    <header>
        <Container >
            <Row className="align-items-center">
                <div className="col-lg-2 text-center">
                    <a href="#">
                        <img src="https://maxsilvercoaching.com/masko/images/logo.png" alt="" />
                    </a>
                </div>
                <div className="col-lg-6 text-center my-4">
                    <ul>
                        {menu}
                    </ul>
                </div>
                <div className="col-lg-4 text-center">
                    <Button primary><Link primary>TESTO</Link></Button>
                    <StyledButton primary color={'#ffff'}><StyledLink primary>TESTO2</StyledLink></StyledButton>
                    <StyledButton><span>TESTO3</span></StyledButton>
                    {/* <ButtonProva buttonText="Trial version"></ButtonProva> */}
                </div>
            </Row>   
        </Container>
    </header>
);

}

export default Header;