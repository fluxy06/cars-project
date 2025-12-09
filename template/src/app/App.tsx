import '@app/App.css'
import CardCar from '@features/CardCar/CardCar';
import CarImg from '@assets/car/cars/cr1.svg?url';


function App() {

  return (
    <div className='container'> 
        <CardCar path={CarImg}
        width={{min: "200px", preferred: "23.75vw", max: "304px"}}
        height={{min: "260px", preferred: "30.3vw", max: "388px"}}
        />
    </div>
  )
}

export default App;
