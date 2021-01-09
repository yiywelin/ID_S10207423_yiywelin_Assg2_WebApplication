class Fetch {
    async getCurrent(input) {
      const myKey = "e8ca9d27c5ec869aab4a1bd2aa71778e";
  
      //make request to url
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${myKey}`
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }