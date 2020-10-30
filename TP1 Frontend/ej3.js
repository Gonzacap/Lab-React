// creamos el elemento template
const tmp3 = document.createElement('template');



// definimos el innerHtml --> donde le agregamos los elementos 
// aqui adentro definimos todos los elementos que interacturan 
tmp3.innerHTML= `

    <style>

        h3 {
            display: flex;
            margin-right:auto;
            margin-left:auto;
            justify-content: center;
        }

        #g3-inp {
            display: flex;
            margin-right:auto;
            margin-left:auto;
            justify-content: center;
        }

        #g3-txta {
            display: flex;
            margin-right:auto;
            margin-left:auto;
            justify-content: center;
        }

    </style>

    <div>
        <h3>Ejercicio 3</h3>
        <br/>
        <input type="text" placeholder="ingrese un numero"  id="g3-inp"/> 
        <br/>
        <textarea id="g3-txta"></textarea>
        <br/>
    </div>    
`; 

// definimos la clase 
class NumImp extends HTMLElement {


    constructor() {
        super();

        var cadena="";

        this._shadowRoot = this.attachShadow({'mode':'open'});
        this._shadowRoot.appendChild(tmp3.content.cloneNode(true));

        this.input = this._shadowRoot.getElementById('g3-inp');
        this.textarea = this._shadowRoot.getElementById('g3-txta');

        this.input.addEventListener("keydown", (event)=>{

            var codigo = event.which || event.keyCode;

            if((codigo >= 48) && (codigo <= 57)){

                switch(codigo) {
                    case 48:
                        cadena="cero";
                        break;
                    case 49:
                        cadena="uno";
                        break;
                    case 50:
                        cadena="dos";
                        break;
                    case 51:
                        cadena="tres";
                        break;
                    case 52:
                        cadena="cuatro";
                        break;
                    case 53:
                        cadena="cinco";
                        break;
                    case 54:
                        cadena="seis";
                        break;
                    case 55:
                        cadena="siete";
                        break;
                    case 56:
                        cadena="ocho";
                        break;
                    case 57:
                        cadena="nueve";
                        break;
                    default:
                      // code block
                }

                this.textarea.value += cadena+'\n';
            }
            //else{  
            //}
            
        });

    } 

}

// para crear el elemento y mostrarlo en la pagina html
window.customElements.define('g3-input',NumImp);