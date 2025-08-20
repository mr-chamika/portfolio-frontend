import Logo from '../assets/Navbar/logos.png';

const Navbar = () => {

    return (
        <div class='sm:w-full w-full bg-blue-50 flex items-center justify-between pr-3' >
            <a href='/'><img src={Logo} width='70px' class='bg-none' /></a>

            <nav className="flex gap-2 justify-end p-2 rounded-lg">

                <a
                    href='/home'
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === '/home'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-600 hover:bg-gray-700 hover:text-white'
                        }`}
                >
                    Home
                </a>

                <a
                    href='/about'

                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === '/about'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-600 hover:bg-gray-700 hover:text-white' // Inactive link styles
                        }`}
                >
                    About
                </a>

                <a
                    href='/contact'
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === '/contact'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-600 hover:bg-gray-700 hover:text-white'
                        }`}
                >
                    Contact
                </a>
            </nav>
        </div>
    );

}

export default Navbar;