import { useState } from "react"
import ProductList from "./components/ProductList"
import UseEffectExample from "./components/UseEffectExample"
import UseEffectExample2 from "./components/UseEffectExample2"
import FetchingAxios from "./components/FetchingAxios"
const App = () => {
// const [category, setCategory] = useState('')
  return (
    <>
      <h1 className="text-center">React Fetching Data Examples, Using Axios, services, Http, CRUD</h1>
      <FetchingAxios/>
      {/* <UseEffectExample/> */}
      {/* <UseEffectExample2/> */}
      {/* <ProductList category={category}/>
      <div>
        <select className="form-select" onChange={(e) => setCategory(e.target.value)}>
          <option value=""></option>
          <option value="Clothing">Clothing</option>
          <option value="Household">Household </option>
        </select>
      </div> */}
    </>
  )
}
export default App