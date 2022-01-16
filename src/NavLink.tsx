import './NavLink.css';

type LinkParams = {
    label:string,
    cssClass?:string,
    url?:string,
}

const NavLink=( par: LinkParams )=>{

const {label, cssClass} = par;
    
    return(
        <li className={cssClass}>
            <a href={par.url}>{par.label}</a>
        </li>
    );    
}

export default NavLink;
