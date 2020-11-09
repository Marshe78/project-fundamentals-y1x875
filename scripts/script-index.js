/**
 * Exercie #1
 * Switch Tab
 */

const navTabs = document.querySelector(".tab");
const tabItems = navTabs.children;
const contentItems = document.querySelectorAll(".content > li");

/**
 * Ajouter un event click sur la barre de navigation
 *
 * Transformer en array la liste (HTMLCollection) de tab contentItems
 *
 * Stocker dans une variable l'index de l'élément cliqué (tip = indexOf)
 *
 * Pour chaque éléments...
 * ...masquer les contenus (tip = style)
 * ...rendre tous les tabs inactifs (tip = classList)
 *
 * Ajouter la class "active" au tab cliqué
 *
 * Afficher le contenu ciblé grâce à l'index  (tip = style)
 *
 **/

/**
 * Exercice #2
 * Expand
 */

/**
 * Récupérer les éléments avec la class .expand-title
 *
 * Pour chaque expand-title...
 *
 * Ajouter un event click à chaque élément expend title
 *
 * Stocker l'élément titre cliqué (l'icone doit être également cliquable)
 *
 * Gérer le cas où l'élément titre a la class .open...
 *
 * Ouvrir l'élément expand-content (tip = maxHeight)
 * Gérer l'animation de l'icon
 *
 * Ajouter/Supprimer la class open à l'élément title
 */

/**
 * Exercice #3
 * Features Localstorage
 **/

/**
 * Récupérer tous les éléments switch
 *
 * Récupérer le storage du browser
 *
 * Pour chaque switch...
 *
 * Gérer les 2 cas où le storage existe/pas
 *
 * Pour chaque élément du storage...(tip = some)
 * Mettre à jour la value checked correspondant au bon titre (tip = element.checked)
 *
 * Mettre à jour l'array avec le nouvel objet { title: myTitle, checked: false } (tip = push)
 *
 * Ajouter un event click à chaque élément...
 * Récupérer le storage du browser
 * Mettre à jour la valeur de checked de l'input correspondant à l'élement cliqué
 * Mettre à jour le storage récupéré (tip = some)
 * Mettre à jour le storage du browser
 *
 * Dans le cas où le browser n'a aucun storage...
 * Mettre à jour le storage avec l'array d'objets
 */
