class Celulares{

    constructor(color, peso, tamaño, resCamara, ram){
        this.Color = color;
        this.Peso = peso;
        this.Tamaño = tamaño;
        this.ResCamara = resCamara;
        this.Ram = ram;
        this.encendido = false;
    
    }

    Prender(){
        if(this.encendido == false){
            alert("Celular encendido");
            this.encendido = true;

        }else{
            alert("El celular ya esta encendido");
        }

    }

    Apagar(){
        if (this.encendido == true) {
            alert("Celular apagado");
            this.encendido = false;            
        }else{
            alert("El celular ya esta apagado");
        }
    }

    Reiniciar(){
        if(this.encendido == true){
            alert("Reiniciando celular");

        }else{
            alert("Celular apagado");
        }
    }

    TomarFoto(){
        alert("Foto tomada en una resolucion de: " + this.ResCamara);
    }

    GrabarVideo(){
        alert("Grabando video en una resolucion de: " + this.ResCamara);
    }

    MostrarCelular(){
        return `
        Color: <br${this.Color}</br>     
        Peso: <br>${this.Peso}</br> 
        Tamaño: <br>${this.Tamaño}</br> 
        Resolucion de camara: <br>${this.ResCamara}</br> 
        Resolucion de video: <br>${this.ResCamara}</br> 
        Memoria ram: <br>${this.Ram}</br>   
      
        ` ;
    }
}


class GamaAltaCel extends Celulares{
    constructor(color, peso, tamaño, resCamara,ram, resCamExtra){
        super(color, peso, tamaño, resCamara,ram);
        this.CamaraExtra = resCamExtra;

    }

    CAMLenta(){
        alert("Se esta grabando en camara lenta");
    }

    ReconocimientoFacial(){
        alert("Iniciando reconocimiento facial");
    }
    MostrarCelularGamaAlta(){
        return`
        Color: <br${this.Color}</br>     
        Peso: <br>${this.Peso}</br> 
        Tamaño: <br>${this.Tamaño}</br> 
        Resolucion de camara: <br>${this.ResCamara}</br> 
        Resolucion de video: <br>${this.ResCamara}</br> 
        Memoria ram: <br>${this.Ram}</br>   
        Camara Extra: <br>${this.CamaraExtra}</br>
        `
    }
    

}

let Samsung = new Celulares("negro", "150gr", "5 pulgadas", "fullHD", "2GB");
let Huawei = new Celulares("rojo", "100gr", "6.6 pulgadas", "HD", "3GB");
let iphone = new Celulares("Blanco", "160gr", "7 pulgadas", "fullHD", "4GB");
let ZTE = new GamaAltaCel("Cafes", "90gr", "5.5 pulgadas", "fullHD", "2GB","4k");
let Xiaomi = new GamaAltaCel("Rojo", "123gr", "6.5 pulgadas", "4k", "3GB","4k");

/* Samsung.Prender();
Samsung.Apagar();
Samsung.Reiniciar();
Samsung.TomarFoto();
Samsung.GrabarVideo(); */

document.write(`
${Samsung.MostrarCelular()} <br>
${Huawei.MostrarCelular()}<br>
${iphone.MostrarCelular()}<br>
${ZTE.MostrarCelularGamaAlta()}<br>
${Xiaomi.MostrarCelularGamaAlta()}<br>
`);





