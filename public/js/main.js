const summition=document.getElementById('submitBtn');
const cityName=document.getElementById('cityname');
const temP=document.getElementById('temp');
const datE=document.getElementById('todaydate');
// datE.innerText=new date();
// const todaydate=;
datE.innerHTML=new Date();
const getInfo = async(event)=>
{
    let citynam=cityName.value;
    if(citynam==="")
    temP.innerText='please enter the city name';
    else
    {

         try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${citynam}&units=metric&appid=9a4aa8e1124d76c0bc93bfea9a25eda8`;

    const respose= await fetch(url);
    const data= await respose.json();
    temP.innerText=`${data.main.temp}`;
         }catch
         {
               alert(`some error`);
         }
    
    }

   
}
summition.addEventListener('click',getInfo);