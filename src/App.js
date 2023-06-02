import './counter.css'
import Counter from './Counter'
function App (){
//  const [first, setfirst] = useState(1)

return(
<div style={{ display:"flex",justifyContent:'center',flexDirection:'column',alignItems:'center'  }}>

<div className='main-tab'>
  <h1>Counter App</h1>
  <Counter/>
  </div>
</div>
)
}
export default App;