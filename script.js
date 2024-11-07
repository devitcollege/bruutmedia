document.getElementById('language-select').addEventListener('change', function () {
    const language = this.value;
    changeLanguage(language);
  });
  
  function changeLanguage(language) {
    const title = document.getElementById('title');
    const introText = document.getElementById('intro-text');
    const footerText = document.getElementById('footer-text');
  
    const content = {
      en: {
        title: "Welcome to Our Website",
        intro: "This is a sample website where you can choose your preferred language.",
        footer: "Thank you for visiting!"
      },
      es: {
        title: "Bienvenido a nuestro sitio web",
        intro: "Este es un sitio web de ejemplo donde puedes elegir tu idioma preferido.",
        footer: "¡Gracias por visitar!"
      },
      fr: {
        title: "Bienvenue sur notre site Web",
        intro: "Ceci est un site Web d'exemple où vous pouvez choisir votre langue préférée.",
        footer: "Merci de votre visite!"
      },
      de: {
        title: "Willkommen auf unserer Website",
        intro: "Dies ist eine Beispiel-Website, auf der Sie Ihre bevorzugte Sprache wählen können.",
        footer: "Danke für Ihren Besuch!"
      },
      it: {
        title: "Benvenuto nel nostro sito web",
        intro: "Questo è un sito web di esempio dove puoi scegliere la tua lingua preferita.",
        footer: "Grazie per la visita!"
      }
    };
  
    title.textContent = content[language].title;
    introText.textContent = content[language].intro;
    footerText.textContent = content[language].footer;
  }
  