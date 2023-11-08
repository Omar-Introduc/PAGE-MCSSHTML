class AppElement extends HTMLElement {

  constructor() {
    super();
    console.log("Este componente tiene los atributos: ", this.getAttributeNames());
    console.log("El valor del atributo «value» es ", this.getAttribute("value"));
    console.log("¿El atributo «is-enabled» existe? ", this.hasAttribute("is-enabled"));    
  }
  static get observedAttributes() {
    return ["value", "is-enabled"];
  }

  attributeChangedCallback(name, old, now) {
    console.log(`El atributo ${name} ha sido modificado de ${old} a ${now}.`);
  }  

/**   connectedCallback() {
    this.name = this.getAttribute("name") || "Desconocido";
    this.innerHTML = "<div>" + this.name + "</div>";
  }*/
  connectedCallback() {
    this.innerHTML = /* html */`
      <style>
        h2 {
          color: hotpink;
        }
      </style>
      <div class="container">
        <h2>Títular del componente</h2>
        <p>Texto y descripción del contenido del componente.</p>
      </div>
    `;
  }    
}

customElements.define("app-element", AppElement);