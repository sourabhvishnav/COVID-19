// $(function (){
//   $.getJSON("https://api.covid19api.com/summary",function(data){
//   console.log(data);
// });
// });

async function getData(){

     const data = await fetch('https://api.covid19api.com/summary');

     const jsData = await data.json();
     console.log(jsData)

     $("#totconfirmed").html(jsData.Global.TotalConfirmed);
     $("#totrecovered").html(jsData.Global.TotalRecovered);
     $("#death").html(jsData.Global.TotalDeaths);
     
     $("#cConfirmed").html(jsData.Countries[76].TotalConfirmed);
     $("#cRecovered").html(jsData.Countries[76].TotalRecovered);
     $("#cDeath").html(jsData.Countries[76].TotalConfirmed);
}
getData();