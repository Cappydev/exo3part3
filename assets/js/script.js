//Je déclare ma fonction de changement de couleur
function changeColor(elmnt){
// On stock dans une variable, la valeur de l'attribut class de l'element sur lequel on viens de cliquer
  var classValue = elmnt.getAttribute('class');
// On utilise la fonction split pour éclater la chaine de caractère contenue dans la variable classValue on stock le résultat dans la variable  classArray qui déviens un tableau
// Attention tout les tableaux commencent à 0 tableau[index].
  var classArray = classValue.split(' ');
// On applique au texte la couleur correspondant au deuxième élément du tableau.
  console.log(classArray[1]);
  document.getElementById('text').style.color = classArray[1];
}
