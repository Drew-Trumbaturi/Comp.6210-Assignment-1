import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav className='navbar navbar-dark bg-dark row'>
            <div className='col-5'>
            <Link to='/' className='text-white text-decoration-none'>
                <div className='row'>
                    <div className='col-sm-1'>
                        <img src='images/Logo.png' />
                    </div>
                    <div className='col-sm-11 mt-3'>
                        <h4 className='ms-2'>SCP Foundation</h4>
                    </div>
                </div>
            </Link>
            </div>

            <div className='col-7'>
                <div className='center'>
                    <ul className="nav"> 
                        <Link to='/' className='nav-item text-decoration-none'>
                            <li className='nav-link text-white'>Home</li>
                        </Link>

                        <Link to='/Catalog' className='nav-item text-decoration-none'>
                            <li className='nav-link text-white'>Catalog</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;