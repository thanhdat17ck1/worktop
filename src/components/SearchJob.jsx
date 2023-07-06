import { useState } from "react"

const SearchJob = () => {
    const [search, setSearch] = useState("")
    const handleFind = () => {
        alert(search)
    }
  return (
    <div>
      <input type="text" placeholder="Tìm công việc, vị trí bạn muốn ứng tuyển" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleFind}>Tìm kiếm</button>
    </div>
  )
}

export default SearchJob
