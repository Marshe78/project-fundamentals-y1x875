const geoCityKey = "691526035fd14ae88c7c4170a2f21ce0";
const geoCityURL = "https://api.opencagedata.com/geocode/v1/json?";
const geolocationOptions = {
  maximumAge: 10000,
  timeout: 3000,
  enableHighAccuracy: true
};
const ipURL = "https://ipapi.co/json/";
const btnAirQuality = document.getElementById("btn-air-quality");
const iconLocation = document.querySelector(".icon-location");
const inputLocation = document.getElementById("input-city");
import cityPollutions from "./modules/cityPollutions.js";

// Déclaration d'une variable cityResponse
let cityResponse;

function getCity(coords, callback) {
  // Construire l'url
  const url = new URL(geoCityURL);
  // Construire les paramètres de la requête (tip = params: q, key, pretty)
  const query = coords.latitude + " " + coords.longitude;
  const query1 = `${coords.latitude} ${coords.longitude}`;
  const params = { q: query1, key: geoCityKey, pretty: 1 };
  // Ajouter les paramètres à l'url (tip = new URLSearchParams)
  url.search = new URLSearchParams(params).toString();

  // Initialiser et envoyer la requête (Ajax méthode)
  const Http = new XMLHttpRequest();
  Http.open("GET", url);
  Http.setRequestHeader("Content-Type", "text/plain");
  Http.send();
  // Récupérer la réponse de la requête au bon status (>200  && >400)
  Http.onreadystatechange = function() {
    if (Http.readyState === XMLHttpRequest.DONE) {
      const status = Http.status;
      if (status === 0 || (status >= 200 && status < 400)) {
        cityResponse = JSON.parse(Http.responseText).results;
        if (callback) {
          callback(cityResponse);
        }
      }
    }
  };
  // Setter cityResponse avec la liste de résultats (tip = JSON.parse())
  // Gérer le cas d'erreur { message: 'Error XMLHttpRequest' };
}

function getCityPromise(coords) {
  const { latitude, longitude } = coords;

  // Contruire l'URL (tip = new URL())
  const url = new URL(geoCityURL);
  const params = { q: `${latitude} ${longitude}`, key: geoCityKey, pretty: 1 };
  // Ajouter les paramètres (q, pretty, key) (tip = new URLSearchParams())
  url.search = new URLSearchParams(params).toString();

  const Http = new XMLHttpRequest();
  Http.open("GET", url, params);
  // Initialiser et retourner une Promise
  return new Promise(function(resolve, reject) {
    // Utiliser la méthode AJAX pour effectuer la requête
    Http.onreadystatechange = function() {
      if (Http.readyState === XMLHttpRequest.DONE) {
        const status = Http.status;
        if (status === 0 || (status >= 200 && status < 400)) {
          console.log(JSON.parse(Http.responseText).results);
          resolve(JSON.parse(Http.responseText).results);
        } else {
          reject({ message: "Error XMLHttpRequest" });
        }
      }
    };
  });

  // Résoudre la Promise avec la liste des résulats

  // Rejeter la Promise avec un objet {message: 'Error XMLHttpRequest'}
}

function toggleLocationLoading() {
  const classes = iconLocation.classList;
  if (classes.contains("loading")) {
    classes.remove("loading");
    classes.add("icon-location");
  } else {
    classes.add("loading");
    classes.remove("icon-location");
  }
}

function fillInputCity(city) {}

function getCityCallback(result) {
  if (result) {
    inputLocation.value =
      result[0].components.state_district || result[0].components.county;
  }
  toggleLocationLoading();
}

function successGeolocation(position) {
  /**
   * 1.1 AJAX METHOD
   */

  // Gérer le cas où les coordonnées sont vides
  if (position.coords) {
    // Récupérer la ville grâce aux coordonnées
    getCity(position.coords, getCityCallback);
  } else {
    errorGeolocation();
  }

  /**
   * 1.2 PROMISE METHOD
   */
}

function errorGeolocation(err) {
  // Récupérer les coordonnées par API
  let xhrObject = new XMLHttpRequest();
  xhrObject.open("GET", ipURL);
  xhrObject.setRequestHeader("Content-Type", "text/json");
  xhrObject.send();

  xhrObject.onreadystatechange = function() {
    if (xhrObject.readyState === XMLHttpRequest.DONE) {
      if (
        xhrObject.status === 0 ||
        (xhrObject.status >= 200 && xhrObject.status < 400)
      ) {
        // Récupérer la ville grâce aux coordonnées dans la réponse API
        getCity(
          {
            latitude: JSON.parse(xhrObject.responseText).latitude,
            longitude: JSON.parse(xhrObject.responseText).longitude
          },
          getCityCallback
        );
      }
    }
  };
}

function getAirQuality(city) {
  if (city) {
    // Get datas with fetch method
    // Our file starts being full
  } else {
    // Gérer le cas où le paramètre city est vide
  }
}

function checkGeolocation() {
  // Utiliser l'objet navigator pour récupérer la position
  // Ne pas oublier les options à passer en paramètre
  // Gérer le retour en success et en error
  navigator.geolocation.getCurrentPosition(
    successGeolocation,
    errorGeolocation,
    geolocationOptions
  );

  toggleLocationLoading();
}

/**
 * 1. Geolocation
 */
function init() {
  // Vérifier la géolocation
  checkGeolocation();

  // Ajouter un event au click sur l'icone location
  iconLocation.addEventListener("click", function() {
    // Si l'input n'est pas vide vérifier la géolocation
    //if (!inputLocation.value) {
    checkGeolocation();
    //}
  });

  /**
   * 2. Pollution
   */

  // Ajouter un event au click sur check air quality

  // Gérer le loading du bouton en ajoutant la clas .loading

  // Gérer la récupération des valeurs dans le module cityPollutions

  // Gérer le success dans le then()

  // Gérer l'erreur dans le catch()

  // Gérer le loading du bouton dans le finally()

  // Vérifier la value de l'input city à chaque modification (tip = event input)

  // tip = logguer event pour trouver la valeur
}

// Appeler la fonction init
init();
