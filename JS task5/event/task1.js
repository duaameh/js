

  const button = document.getElementById('myButton');

  button.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow';
    this.style.fontWeight = 'bolder';
  });

  button.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
    this.style.fontWeight = '';
  });

 const countrySelect = document.getElementById('countrySelect');
const flagImage = document.getElementById('flagImage');

const countries = [
  { name: 'Jordan', flag: 'Flag_of_Jordan.png'},
  { name: 'Canada', flag: 'Flag_of_Canada.png' },
  { name: 'Palestine', flag: 'Flag_of_Palestine.png' },
];

// Populate the dropdown menu with country names
countries.forEach(country => {
  const option = document.createElement('option');
  option.text = country.name; //user 
  option.value = country.name; //server
  countrySelect.add(option);
});

countrySelect.addEventListener('change', function() {
  const selectedCountry = this.value;
  const selectedCountryData = countries.find(country => country.name === selectedCountry);
  if (selectedCountryData) {
    flagImage.src = selectedCountryData.flag;
  } else {
    flagImage.src = ''; 
    flagImage.alt = 'Flag image';
  }
});
