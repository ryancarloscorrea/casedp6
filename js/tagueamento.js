// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.;

// visualização de pagina

ga("send", "pageview", location.pathname);

///// PAGINA HOME ////////////

/// verificação feita para evitar ocorrência de logs no console
if (document.getElementsByClassName("menu")) {
  document.getElementById("entre-em-contato").addEventListener("click", () => {
    ga("send", {
      hitType: "event",
      eventCategory: "menu",
      eventAction: "entre_em_contato",
      eventLabel: "link_externo",
    });
    console.log(ga.q);
  });
  document.getElementById("download-pdf").addEventListener("click", () => {
    ga("send", {
      hitType: "event",
      eventCategory: "menu",
      eventAction: "download_pdf",
      eventLabel: "download_pdf",
    });
    console.log(ga.q);
  });
}
//////////// Pagina analise ////////////

if (document.getElementById("container-cards")) {
  const auxIdsCards = ["dolor", "ipsum", "lorem"];
  auxIdsCards.map((auxId) => {
    document
      .getElementById(`analise-${auxId}`)
      .addEventListener("click", () => {
        ga("send", {
          hitType: "event",
          eventCategory: "analise",
          eventAction: "ver_mais",
          eventLabel: `${auxId.charAt(0).toUpperCase() + auxId.slice(1)}`, /// capitalize
        });
        console.log(ga.q);
      });
  });
}

////// pagina sobre //////
//

if (document.getElementById("form-contato")) {
  const auxIdsInputs = ["nome", "email", "telefone", "aceito"];
  /// implementar aceito
  auxIdsInputs.map((auxId) => {
    const element = document.getElementById(auxId);
    if (auxId !== "aceito") {
      element.addEventListener("blur", (e) => {
        if (e.target.value) {
          ga("send", {
            hitType: "event",
            eventCategory: "contato",
            eventAction: auxId,
            eventLabel: "preencheu",
          });
          console.log(ga.q);
        }
      });
    } else {
      element.addEventListener("click", () => {
        ga("send", {
          hitType: "event",
          eventCategory: "contato",
          eventAction: auxId,
          eventLabel: "preencheu",
        });
        console.log(ga.q);
      });
    }
  });
}

if (document.getElementById("body-sobre")) {
  const element = document.getElementById("body-sobre");
  const config = { attributes: true };

  const callback = (mutationsList) => {
    for (const mutation of mutationsList) {
      if (
        mutation.attributeName === "class" &&
        element.className === "sobre domready lightbox-open"
      ) {
        ga("send", {
          hitType: "event",
          eventCategory: "contato",
          eventAction: "enviado",
          eventLabel: "enviado",
        });
        console.log(ga.q);
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(element, config);
}
