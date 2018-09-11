var obj = {
    name: 'Malkeet',
    cities: ['Delhi', 'Kurukshetra', 'Sydney'],
    displayCities: function() {
        this.cities.forEach(function(city) {
            console.log(this.name + ' has lived in '+ city);
            
        })
    }
}