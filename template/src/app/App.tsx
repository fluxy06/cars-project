import '@app/App.css'
import Filters from '@features/Filters/Filters';
import { useMobile } from '@shared/Hooks/useMobile';

function App() {

  return (
    <div className='w-full h-full'>
          <Filters isMobile={useMobile(769)}/>
     </div>
  )
}

export default App;
