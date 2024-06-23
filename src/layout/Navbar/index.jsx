import Logo from '@assets/images/logo.png';
import Search from '@assets/svgs/search.svg';
import Doubt from '@assets/svgs/doubt.svg';
import Bell from '@assets/svgs/bell.svg';
import UserName from '@assets/svgs/username.svg';
import User from '@assets/images/user.png';

// hooks
import { useNavigate, useLocation  } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
    const location = useLocation();

    const navigateToUrl = ()=>{
        if( location.pathname === "/dashboard"){
            navigate("/stock-dashboard")
        }
        else{
            navigate("/dashboard")
        }
    }
  return (
    <div className='narbar-container'>
        <div className='narbar-left-container'>
            <div><img src={Logo} alt="logo" /></div>
            <div className='navbar-title cursor-pointer' onClick={navigateToUrl} >Market Analyser</div>
        </div>
        <div className='navbar-right-container'>
            <div className='navbar-icons-box'>
                <div><img src={Search} alt="search" /></div>
                <div><img src={Doubt} alt="question" /></div>
                <div><img src={Bell} alt="bell" /></div>
            </div>
            <div className='navbar-right-box'>
                <div><img src={User} alt="user" /></div>
                <div>Harish G</div>
            </div>
            <div><img src={UserName} alt="user" /></div>
        </div>
    </div>
  )
};

export default Navbar;
