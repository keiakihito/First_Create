//Form.tsx

// state is temporary store user input, then send it to API to request world wheather
import{useState} from "react"

//Data flow user input -> <input/> -> onChange -> setCity

let debug : boolean = true;


const Form = () => {

    //user input is stored to the city
    //setCity is operation how to handle user data which is stored to city.
    const [city, setCity] = useState<string>("")
    const getWeather = (e: any) =>{
        e.preventDefault() // Stop reload after hitting the button
        //API call to fetch weather
        fetch("http://api.weatherapi.com/v1/current.json?key=b5e06bbaa9144246a42193844241608&q=London&aqi=no")
            .then(res => res.json())
            .then(data => {
                if(debug){
                    console.log("Weather data:", data);
                }
            })
            .catch(err => console.log(err));
    }

    return(
        <form>
            <input type = "text"
                        name = "city"
                        placeholder = "City Name"
                        // Pass the user input to setCity state
                        // e stands for event parameter,  and e has multiple data like Json or array
                        //setCity sets the data value to city
                        onChange = {e => setCity(e.target.value)}
            />

            {/*click the button and getWeather function is called, then API call fetches the data*/}
            <button type = "submit" onClick={getWeather}>Get Weather</button>
        </form>
    )
}

export default Form;