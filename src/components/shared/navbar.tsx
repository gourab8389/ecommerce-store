import { Categories } from "../landing/category";
import { LocationDialog } from "../landing/location-dialog";
import SearchBar from "../landing/search-bar";

const Navbar = () => {
  return (
    <section className='w-full max-w-screen-2xl px-5 md:px-14 flex md:gap-10 justify-between items-center md:justify-center fixed top-0 left-0 right-0 mx-auto shadow-sm h-[5rem]'>
        <div className="w-[25%] flex items-center justify-between">
            <div className="flex items-center justify-center">
            <h1 className='text-sky-950 font-extrabold text-4xl'>Logo</h1>
            </div>
            <LocationDialog/>
        </div>
        <div className="w-[30%] flex gap-5">
            <SearchBar/>
        </div>
        <div className="w-[45%] flex items-center gap-6">
            <Categories/>
        </div>
    </section>
  )
}

export default Navbar;
