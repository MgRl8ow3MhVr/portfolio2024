function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

const findaword = (word, tabIn) => {
  //tableau de sortie avec 'pos du mot dans tab, pos de la lettre'
  let outtab = [];
  let tab = [...tabIn];
  // boucle sur les lettres a chercher
  for (let i = 0; i < word.length; i++) {
    //boucle sur les mots qu'on a dispo
    for (let j = 0; j < tab.length; j++) {
      //si on a trouvé la lettre dans le mot courant
      if (tab[j].title.toLowerCase().indexOf(word[i]) !== -1) {
        tab[j].bigletter = tab[j].title.toLowerCase().indexOf(word[i]);
        outtab.push(tab[j]);
        tab.splice(j, 1);
        break;
      }
      //si on arrive au bout sans trouver de lettre
      if (j === tab.length - 1) {
        return word[i];
      }
    }
  }
  //ici on a bien trouvé les lettres
  //completer le tableau de sortie avec les mots non utilisés
  tab.map((el) => {
    el.bigletter = -1;
    outtab.push(el);
  });
  return outtab;
};

const sortProjects = (word, listProjects) => {
  let tab = [...listProjects];
  let currResult = findaword(word, tab);
  let occurence = 0;

  while (currResult.length === 1 && occurence < 15) {
    occurence++;
    // tab.unshift(tab.pop());
    shuffleArray(tab);
    currResult = findaword(word, tab);
  }

  //ici on n'a pas trouvé de combinaison
  if (currResult.length === 1) {
    listProjects.map((proj) => {
      proj.bigletter = -1;
    });
    return listProjects;
  }

  return currResult;
};

export default sortProjects;
