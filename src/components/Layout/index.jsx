import logo from "../../assets/netflix-logo.png";
import { searchInNetflix } from "../../services";

export default function Layout({
    children,
    searchText,
    setSearchText,
    setTitles})
{
    const handleKeyUp = async (event) => {
        if (event.key === "Enter" && searchText){
        const results = await searchInNetflix(searchText);
        setTitles(results.titles);
        }
    }

   /* const handleInputSearch = (event) => {
        setSearchText(event.target.value)
    } 
    */

    return (

        <>
        <div className="flex justify-between items-center">
            <img className="w-28 md:w-44 -ml-2 md:-ml-4" src={logo} alt="" />
            <input 
            type="text" 
            placeholder="Buscar" 
            value={searchText}
            //onChange={handleInputSearch}
            onKeyUp={handleKeyUp}
            onChange={(event)=> setSearchText(event.target.value)}
            className="py-1 px-2 outline-none bg-black/30 border" 
            />
        </div>
        {children}
        </>

    )
   
}