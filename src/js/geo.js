document.addEventListener('DOMContentLoaded', function () {
  const addressElement = document.querySelector('.address');
  addressElement.addEventListener('click', function () {
    const address = encodeURIComponent(addressElement.textContent);
    const mapsUrl = 'https://www.google.com/maps/place/' + address;
    window.open(mapsUrl, '_blank');
  });
});
