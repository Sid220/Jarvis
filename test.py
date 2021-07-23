from geopy.geocoders import Nominatim
geolocator = Nominatim()
location = geolocator.reverse("42.456131, -71.064682")

print(location.address)