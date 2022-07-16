import { useState } from 'react'
import SearchForm from './Components/search-form';
import SearchResults from './Components/search-results';

function App() {

  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <main>
      <SearchForm />
      <SearchResults />
    </main>
  )
}

export default App
