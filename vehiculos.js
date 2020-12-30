
  class Vehiculo
  {
    constructor(marca, modelo,precio) 
	{
      this.marca = marca;
      this.modelo = modelo;
	  this.precio=precio;
    }

    ObtenerInfo() 
	{
      document.write(`Marca: ${this.marca}//`);
      document.write(`Modelo: ${this.modelo}//`);
	  document.write(`Precio: ${this.precio}//`);
    }    
  }


  class Auto extends Vehiculo {
    constructor(marca,modelo,precio,puertas) {
      super(marca,modelo,precio);
      this.puertas = puertas; 
    }

    ObtenerInfo() {
      super.ObtenerInfo();
      document.write(`Puertas: ${this.puertas}<br>`);
    }

  }


  class Moto extends Vehiculo {
    constructor(marca,modelo,precio,cilindrada) {
      super(marca,modelo,precio);
      this.cilindrada = cilindrada; 
    }

    ObtenerInfo() {
      super.ObtenerInfo();
      document.write(`Cilindrada: ${this.cilindrada}<br>`);   
    }

  }
const arrayobjetos=[];

function cargoenvector(veh)
{
	
	arrayobjetos.push(veh);
}
  const auto1=new Auto('Peugeot', 206,200000,4);
  
  const auto2=new Auto('Peugeot',208,'250000',5);
  const moto1=new Moto('Honda','Titan','60000',125);
  const moto2=new Moto('Yamaha','YBR','80500.5',160);
  
  cargoenvector(auto1);
  cargoenvector(moto1);
  cargoenvector(auto2);
  cargoenvector(moto2);
  
  
  
  /*recorro el array sin tener en cuenta la cantidad de elementos informando atributos y valores de los objetos*/
  arrayobjetos.forEach(element => 
  {
        let cadena="";
		for (const property in element) 
			{
			   if (`${property}` === 'precio')
				   {
					  cadena= cadena  + `${property}: `+ `$` + (`${element[property]}`).replace('.',',')+'//'; 
					  
				   }
				else
					if (`${property}` === 'cilindrada')
						{
							cadena= cadena  + `${property}: ` + (`${element[property]}`)+'cc//';
						}
						else
			  cadena= cadena + `${property}: ${element[property]}` +'//';

			}
			//document.write(cadena);
			console.log(cadena);
		
  } 
	  );
	   

  //ordeno por precio
  arrayobjetos.sort(function (a, b){
    return (b.precio - a.precio)
})
console.log("Vehiculo mas caro:" + arrayobjetos[0].marca + ' ' + arrayobjetos[0].modelo);
console.log("Vehiculo mas barato:" + arrayobjetos[3].marca + ' ' + arrayobjetos[3].modelo);

/*obtengo el modelo que tiene letra 'Y'*/
arrayobjetos.forEach(element=>
{
	for (const property in element) 
			{
				
			  if (`${property}` === 'modelo'  ) 
				  {
					  if (`${element[property]}`.indexOf('Y')>-1)
						  {
						  let cadena="Vehículo que contiene en el modelo la letra ‘Y’:" + `${element[property]}` + 'y su precio es ' + `${element['precio']}`;
				
               				console.log(cadena);
						  }				   
				  }
			}
		}
)

/*----------vehiculos ordenados por precio de mayor a menor-------------*/
console.log("Vehiculos ordenados por precio de mayor a menor");
console.log("\n");

  arrayobjetos.forEach(element => 
  {
        let cadena="";
		for (const property in element) 
			{
			  if (`${property}` === 'marca' ||`${property}` === 'modelo' ) 
			    cadena= cadena + `${property}: ${element[property]}` +'//';
		   
		   

			}
			console.log(cadena);
		
  } 
	  );




/* tambien se podria haber hecho asi pero la consigna es sin tener en cuenta la cantidad
for (i=0;i<arrayobjetos.length;i++)
{
console.log(arrayobjetos[i].marca + ' ' + arrayobjetos[i].modelo);
console.log("\n");
}
*/