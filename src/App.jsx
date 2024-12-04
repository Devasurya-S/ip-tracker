import Input from "./components/Input"
import Output from "./components/Output"

function App() {

  return (
    <>
      <div className="top-component py-5">
        <div className="contaiiner h-100">
          <div className="position-relative h-100">
            <Input/>
            <Output/>
          </div>
        </div>
      </div>
      <div className="map-component">

      </div>
    </>
  )
}

export default App
