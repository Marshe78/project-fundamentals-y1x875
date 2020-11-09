const cityPollutions = {
  airQualityToken: "ef152b458d54e50d94ab784a2225b73286179bbf",
  airQualityURL: "https://api.waqi.info/feed",
  inputLocation: document.getElementById("input-city"),
  valuesList: [],
  cities: [],
  polluants: [
    { desc: "Particulate <2.5 microns", abb: "pm25" },
    { desc: "Particulate <10 microns", abb: "pm10" },
    { desc: "Carbon Monoxide", abb: "co" },
    { desc: "Sulfur Dioxide", abb: "so2" },
    { desc: "Nitrogen Dioxide", abb: "no2" },
    { desc: "Ozone", abb: "o3" }
  ],
  addTooltip(element, value) {
    element.classList = "tooltip";
    const description = this.polluants.find(polluant => polluant.abb === value)
      .desc;
    element.setAttribute("data-tooltip", description);
  },
  getEmptyMessage(type) {},
  noCityError(message) {
    /**
     * Créer un élément DOM paragraph
     *
     * Récupérer l'élément dans lequel insérer le paragraph (tip = parentElement)
     *
     * Setter le message du paragraphe
     *
     * Setter la class 'form-input-hint' au paragraphe
     *
     * Ajouter le paragraphe au bon élément
     *
     * Ajouter la class 'has-error' au bon élément
     *
     * Attendre 3 secondes et retirer le paragraphe et la class 'has-error'
     */
  },
  bodyRow() {
    /**
     * Créer une ligne <tr>
     */

    // Contruire la liste de colonnes à insérer dans la tableau
    const columns = [];
    /**
     * Créer et ajouter les objets colonnes de polluants à la l'array columns
     *
     * Créer et ajouter les objets colonnes City et AQI
     */

    // Ajouter les colonnes
    this.addColumnsToRow(columns);

    // Retourner la ligne
  },
  addColumnsToRow(columns) {
    /**
     * Pour chaque element colonne...
     *
     * Extraire les variables nécéssaires à l'objet colonne current (tip = destructuring)
     *
     * Créer l'élément DOM colonne (tip = createElement)
     *
     * Setter la valeur de la colonne (tip = innerHTML)
     *
     * Ajouter la colonne à la ligne à la position demandée (tip = prepend ou append)
     *
     * Gérer l'appel d'un fonction de callback
     */
  },
  addRow() {
    /**
     * Récupérer le <body> du tableau
     *
     *  Récupérer la ligne construite du body
     *
     * Ajouter la ligne à l'élément <tbody> (tip = appendChild)
     */
  },
  buildTable(aqi, polluants, city) {
    // Setter la variable this.valuesList à un tableau d'objets (tip = [{ abb: key, value: value}, {...]) avec les polluants, la city et l'AQI
    this.setValuesList(polluants, aqi, city);

    // Si la ville n'est pas déjà dans le tableau, l'ajouter à this.cities (tip = indexOf)

    // Gérer le cas où le tableau a déjà été initialisé
    // Ajouter une ligne dans le body du tableau et stopper la fonction

    /**
     * Récupérer l'élément du DOM où injecter le tableau
     *
     * Créer un élément table
     *
     * Ajouter au tableau les class nécéssaires cf framework CSS
     *
     * Créer un élément <thead>
     *
     * Créer une ligne <tr>
     */

    // Contruire la liste de colonnes à insérer dans la tableau
    let columns = [];
    //
    //
    /**
     * Créer et ajouter tous les objets colonnes de polluants à la l'array columns (tip = push)
     * exemple d'un objet colonne = { elementType: 'th', value: 45, row: myRow, position: 'end' }
     *
     * Créer et ajouter les colonnes City et AQI
     */

    // Ajouter l'ensemble des colonnes
    this.addColumnsToRow(columns);

    /**
     * Ajouter la ligne à l'élément <thead> (tip = appendChild)
     *
     * Ajouter le <thead> au tableau
     *
     * Créer un élément <tbody> et lui ajouter une class
     *
     * Ajouter la ligne à l'élément <tbody>
     *
     * Ajouter le <tbody> au tableau
     *
     * Ajouter le tableau final au container
     */
  },
  setValuesList(polluants, aqi, city) {
    /**
     * Créer une liste d'objets des polluants [{ abb: key, value: value}, {...]
     *
     * Ajouter les objets city et l'AQI à la liste
     *
     * Récupérer les abbréviations de polluants dans un tableau (tip = map())
     *
     * Filtrer l'array d'objets avec le tableau d'abbréviations (tip = filter(), includes())
     * attention aux objets AQI et City
     */
  },
  getValues(city) {
    // Gérer la réponse asynchrone de la requête
    // Retourner une promise dans laquelle la requête est faite
    return new Promise((resolve, reject) => {
      if (!city) {
        // Gérer le cas où le paramètre city est vide
      } else {
        /**
         * Contruire l'url et ses paramètres
         *
         * Utiliser la méthode fetch (=== Méthode Ajax)
         *
         * Dans la response du fetch vérifier le status
         *
         * Destructurer la response pour déclarer les variables aqi, iaqi et city
         *
         * Appeler la méthode pour contruire le tableau avec les data en paramètres
         */
      }
    });
  }
};

export default cityPollutions;
