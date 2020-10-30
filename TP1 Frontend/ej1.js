// creamos el elemento template
const tmp1 = document.createElement('template');


// definimos el innerHtml --> donde le agregamos los elementos 
// aqui adentro definimos todos los elementos que interacturan 
tmp1.innerHTML= `

    <style>

        h3 {
            display: flex;
            margin-right:auto;
            margin-left:auto;
            justify-content: center;
        }

        #g1-inp {
            display: flex;
            margin-right:auto;
            margin-left:auto;
            justify-content: center;
        }

        #g1-lbl {
            display: flex;
            margin-right:auto;
            margin-left:auto;
            max-width: 30%;
            justify-content: center;
            background-color: rgba(250, 253, 77, 0.5);
            color: black;
        }

    </style>

    <div id="ej1">
        <h3>Ejercicio 1</h3>
        <br/>
        <input type="text" placeholder="ingrese texto" id="g1-inp"/> 
        <br/>
        <label miPropiedad="" id="g1-lbl" />
        <br/>
    </div>    
`; 

// definimos la clase 
class Pipes extends HTMLElement {


    constructor() {
        super();

        var cadena="";

        this._shadowRoot = this.attachShadow({'mode':'open'});
        this._shadowRoot.appendChild(tmp1.content.cloneNode(true));

        this.input = this._shadowRoot.getElementById('g1-inp');
        this.label = this._shadowRoot.getElementById('g1-lbl');
        
        this.input.addEventListener("keydown", (event)=>{

            var aux, aux2;

            var codigo = event.which || event.keyCode;

            if((codigo >=48 && codigo <=90) || (codigo >=96 && codigo <=105) || (codigo == 192)){

                aux = String.fromCharCode(codigo);
                //alert(codigo);
                aux2 = this.input.value.replace(/[a-zA-Z0-9*!¿?¡'ºª+-./=,;:_&{}%Ññ]/g, '|');
                this.label.innerHTML += aux;
                cadena += aux;
                this.input.value = aux2;
            }
            else if(codigo == 8){

                cadena = cadena.slice(0, -1);
                //alert(cadena);
                //alert(codigo);
                aux2 = cadena.replace(/[a-zA-Z0-9*!¿?¡'ºª+-./=,;:_&{}%]/g, '|');
                this.label.innerHTML = cadena;
                this.input.value = aux2;
            }
   
        });

    }
}

// para crear el elemento y mostrarlo en la pagina html
window.customElements.define('g1-input',Pipes);