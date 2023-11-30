
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function SearchOrder() {

  const [query, setQuery] = useState("")
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventfault()
    if (!query) return navigate("/order/${query}")
    setQuery("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder='search Order #'
          value={query}
          //  onchange={(e)=> setQuery(e.target.value)}
          onChange={(e) => setQuery(e.target.value)}
          className='w-28 sm:w-64 rounded-full bg-blue-100 px-4 py-2 text-sm placeholder:text-stone-400 sm:focus:w-72 transition-all duration-300 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50'
        />
      </form>
    </div>
  )
}
export default SearchOrder
