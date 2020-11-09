const geoCityKey = "";
const geoCityURL = "https://api.opencagedata.com/geocode/v1/json?";
const geolocationOptions = { maximumAge: 10000, timeout: 3000, enableHighAccuracy: true };
const ipURL = "https://ipapi.co/json/";
const btnAirQuality = document.getElementById("btn-air-quality");
const iconLocation = document.querySelector(".icon-location");
const inputLocation = document.getElementById("input-city");
import cityPollutions from "./modules/cityPollutions.js";

// Déclaration d'une variable cityResponse
let cityResponse;

function getCity(coords) {
  // Construire l'url
  // Construire les paramètres de la requête (tip = params: q, key, pretty)
  // Ajouter les paramètres à l'url (tip = new URLSearchParams)
  // Initialiser et envoyer la requête (Ajax méthode)
  // Récupérer la réponse de la requête au bon status (>200  && >400)
  // Setter cityResponse avec la liste de résultats (tip = JSON.parse())
  // Gérer le cas d'erreur { message: 'Error XMLHttpRequest' };
}

function getCityPromise(coords) {
  const { latitude, longitude } = coords;
  // Contruire l'URL (tip = new URL())

  // Ajouter les paramètres (q, pretty, key) (tip = new URLSearchParams())

  // Initialiser et retourner une Promise

  // Utiliser la méthode AJAX pour effectuer la requête

  // Résoudre la Promise avec la liste des résulats

  // Rejeter la Promise avec un objet {message: 'Error XMLHttpRequest'}
}

function toggleLocationLoading() {}

function fillInputCity(city) {}

function successGeolocation(position) {
  /**
   * 1.1 AJAX METHOD
   */

  // Gérer le cas où les coordonnées sont vides
  // Récupérer la ville grâce aux coordonnées
  console.log("==== success?? ==== ", cityResponse);

  /**
   * 1.2 PROMISE METHOD
   */
}

function errorGeolocation(err) {
  console.log("errorGeolocation", err);

  // Récupérer les coordonnées par API

  // Récupérer la ville grâce aux coordonnées dans la réponse API

  // Logguer la variable cityResponse
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
}

/**
 * 1. Geolocation
 */
function init() {
  // Vérifier la géolocation
  checkGeolocation();

  // Ajouter un event au click sur l'icone location

  // Si l'input n'est pas vide vérifier la géolocation

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
