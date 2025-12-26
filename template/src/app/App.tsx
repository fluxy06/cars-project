import '@app/App.css'
import Header from 'layots/Header/Header';
import Filters from '@features/Filters/Filters';
import CardCar from '@features/CardCar/CardCar';
import Lambo from "@assets/car/cars/cr1.svg?url"

function App() {

  return (
    <div className='grid grid-cols-3'>
      <div className='grid col-span-3 mb-3'>
            <Header logo="Qin"/> 
      </div>
      <div className='grid col-start-1 col-end-1 '>
            <Filters isMobile={true}/>
      </div>
      <div className='grid col-start-2 col-end-3'>
        <div>
                <CardCar 
                    path={Lambo}
                    width={{min: "200px", preferred: "23.75vw", max: "304px"}}
                    height={{min: "260px", preferred: "30.3vw", max: "388px"}}
                />
        </div>
            
      </div>
     </div>
  )
}

export default App;
