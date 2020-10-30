// creamos el elemento template
const tmp2 = document.createElement('template');



// definimos el innerHtml --> donde le agregamos los elementos 
// aqui adentro definimos todos los elementos que interacturan 
tmp2.innerHTML= `

    <style>

        h3 {
            display: flex;
            margin-right:auto;
            margin-left:auto;
            justify-content: center;
        }

        #g2-inp {
            display: flex;
            margin-right:auto;
            margin-left:auto;
            justify-content: center;
        }

        #g2-lbl {
            display: flex;
            margin-right:auto;
            margin-left:auto;
            justify-content: center;
            /*background-color: rgba(250, 253, 77, 0.863);*/
        }

    </style>

    <div>
        <h3>Ejercicio 2</h3>
        <br/>
        <input type="text" placeholder="ingrese texto" data-longitud-maxima="10" id="g2-inp"/> 
        <br/>
        <label id="g2-lbl"/>
        <br/>
    </div>    
`; 

// definimos la clase 
class MaxLong extends HTMLElement {


    constructor() {
        super();

        var cadena="";

        this._shadowRoot = this.attachShadow({'mode':'open'});
        this._shadowRoot.appendChild(tmp2.content.cloneNode(true));

        this.input = this._shadowRoot.getElementById('g2-inp');
        this.label = this._shadowRoot.getElementById('g2-lbl');

        var contador = Number(this.input.getAttribute("data-longitud-maxima"));
        console.log(contador);

        this.input.addEventListener("keydown", (event)=>{

            var codigo = event.which || event.keyCode;

            if(codigo == 8){
                if(contador<10){
                    contador++;
                    cadena = cadena.slice(0, -1);
                }

            }
            else{
                

                if(contador>0){
                    
                    var aux = String.fromCharCode(codigo);
                    cadena+=aux;
                    //this.input.value = cadena;
                    contador--;
                }
                else {
                    cadena = cadena.toLowerCase();
                    console.log(cadena);
                    this.input.value = cadena;
                }
                
            }
            
            console.log(contador);
        });

    } 

}

// para crear el elemento y mostrarlo en la pagina html
window.customElements.define('g2-input',MaxLong);