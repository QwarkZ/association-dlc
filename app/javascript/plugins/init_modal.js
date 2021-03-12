const initModal = () => {
  const modalWindow = document.getElementById("modal-window");
  if (modalWindow) {
    const shop = document.getElementById("partner-name").innerText;
    // Eléments de la modale (message, nom du magasin, date, boutons)
    const introTag = document.getElementById("intro-text");
    const modalShop = document.getElementById("modal-shop");
    const modalSchedule = document.getElementById("modal-schedule");
    const cancelButton = document.getElementById("modal-cancel");
    const confirmButton = document.getElementById("modal-confirm");
    //Tous les boutons d'action des dates
    const buttons = document.querySelectorAll(".date-action > div");

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        button.classList.add('pop');
        modalWindow.classList.add("z10");
        const date = button.parentElement.parentElement.querySelector('.date').innerText;
        // Vérifier la classe css du bouton pour afficher le bon message
        if (button.classList.contains('cancel')) {
            introTag.innerText = "Souhaitez-vous vous désinscrire pour la récolte :";
        } else {
            introTag.innerText = "Confirmez votre inscription pour la récolte :";
        }

        // Insérer les données magasin + date
        modalShop.innerText = shop;
        modalSchedule.innerText = date;
        // Fermer la modale et rétablir l'état du bouton de la date
        setTimeout(() => {
          button.classList.remove('pop');
          modalWindow.classList.remove("transparent");
        }, 500);
      });
    });

    // Au clic sur Annuler, masquer la modale
    cancelButton.addEventListener('click', () => {
      cancelButton.classList.add("revert-red");
      modalWindow.classList.add("transparent");
      setTimeout(() => {
        modalWindow.classList.remove("z10");
      }, 700);
    });

    // Au clic sur Confirmer, inscrire le user (à terminer)
    confirmButton.addEventListener('click', () => {
      cancelButton.classList.add("revert-green");
      modalWindow.classList.add("transparent");
      setTimeout(() => {
        modalWindow.classList.remove("z10");
      }, 700);
    });
  }

};

export { initModal };
