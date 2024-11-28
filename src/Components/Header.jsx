import { Navbar, NavbarLink } from "flowbite-react"

const Header = () => {
    return (
      <div className="sticky top-0 left-0">
      <nav class="bg-gray-800 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">

          <div class="text-2xl font-bold">Logo</div>
        </div>


        <div class="hidden md:flex space-x-4">
          <a href="#" class="hover:text-gray-300">Home</a>
          <a href="#about" class="hover:text-gray-300">About</a>
          <a href="#services" class="hover:text-gray-300">Project</a>
          <a href="#services" class="hover:text-gray-300">School</a>
          <a href="#contact" class="hover:text-gray-300">Contact</a>
        </div>


        <div class="md:hidden">
          <button id="menu-button" class="focus:outline-none">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          
        </div>
      </div>
    </div>


    <div id="mobile-menu" class="hidden md:hidden bg-gray-700">
      <a href="#home" class="block px-4 py-2 hover:bg-gray-600">Home</a>
      <a href="#about" class="block px-4 py-2 hover:bg-gray-600">About</a>
      <a href="#services" class="block px-4 py-2 hover:bg-gray-600">Services</a>
      <a href="#contact" class="block px-4 py-2 hover:bg-gray-600">Contact</a>
    </div>
  </nav>
  </div>
    )
}

export default Header