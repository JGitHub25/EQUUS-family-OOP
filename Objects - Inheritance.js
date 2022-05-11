//1. TRABAJANDO CON CLASS
//La familia EQUUS: versión hecha con una class
class MamaYegua {
  constructor(nombre, raza) {
    this.nombre = nombre;
    this.raza = raza;
    this.numeroDePatas = 4;
  }
  presentarse() {
    return `Hola, soy ${this.nombre}`;
  }
  trotar(num) {
    return "Chiquilín " + num + " veces";
  }
  static tipoDeClass() {
    return "Soy una class supertype";
  }
}
//Class igual a la constructor function del mismo nombre. LoS único es que lleva de una vez los métodos en el prototype.

let mulita = new MamaYegua("La rechula", "criolla");
//Un object instance de class MamaYegua

class HijaCaballo extends MamaYegua {
  constructor(nombre, raza, sonido) {
    super(nombre, raza);
    this.sonido = sonido;
  }
  relinchar() {
    return `${this.presentarse()} y hago 'hiiii!'`;
  }
}

class HijaBurro extends MamaYegua {
  constructor(nombre, raza, sonido) {
    super(nombre, raza);
    this.sonido = sonido;
  }
  rebuznar() {
    return `${this.presentarse()} y hago 'ijooo, ijooo!'`;
  }
}
//Estas dos clases, HijaCaballo e HijaBurro, extienden a MamYegua y a su vez tendrán hijas.

let nietaCaballo = new HijaCaballo("Babieca", "zarca", "relincho");
//Un object instance de class de HijaCaballo

let nietaBurro = new HijaBurro("Platera", "rucia", "rebuzno");
//Un object instance de class de HijaBurro

//2. TRABAJANDO CON CONSTRUCTOR FUNCTIONS
//La familia EQUUS: versión hecha con una constructor function
function MamaYegua(nombre, raza) {
  this.nombre = nombre;
  this.raza = raza;
  this.numeroDePatas = 4;
}
//Constructor function. Si la declarara con presentarse() y trotar(), estos métodos qudarían en {}, no en el prototype. Los agrego a continuación.
//Las propiedades y/o métodos declarados en una constructor function, sólo se utilizan en las instances creadas con ellas, es decir, no mevan a servir
//para pasárselas a una constructor function subtype (Ver más abajo la declaración de HijaCaballo). Esa es la maravilla del 'super' de las classes.

let mulita = new MamaYegua("La rechula", "criolla");
//Un object instance de function MamaYegua creada antes de cambiar MamaYegua.prototype.

MamaYegua.prototype.presentarse = function () {
  return `Hola, soy ${this.nombre}`;
};
MamaYegua.prototype.trotar = function (num) {
  return `Chiquilín ${num} veces`;
};
//Estas dos declaraciones, le meten de a método a MamaYegua en su prototype: presentarse() y trotar().

MamaYegua.prototype = {
  constructor: MamaYegua,
  presentarse: function () {
    return `Hola, soy ${this.nombre}`;
  },
  trotar: function (num) {
    return `Chiquilín ${num} veces`;
  },
};
//También puedo meter los dos métodos al prototype de MamaYegua (y por ende a sus futuras instancias) reemplazando su objeto prototype. Pero esto
//tiene 2 consideraciones: (1) no va a afectar a instances creadas antes de cambiar el prototype (si sigo el orden que llevo en el código, mulita
//no se vería afectada pero mulita2 sí), y (2) voy a tener que incluir la propiedad constructor para que
//no quede borrada.

let mulita2 = new MamaYegua("La negra", "rucia");
//Un object instance de function MamaYegua creada después de cambiar MamaYegua.prototype. En consecuencia: mismas keys en {} que mulita pero distinto proyotype.

function HijaCaballo(nombre, raza, sonido) {
  this.nombre = nombre;
  this.raza = raza;
  this.sonido = sonido;
  this.relinchar = function () {
    return `${this.presentarse()} y hago 'hiiii!'`;
  };
}
//Aunque MamaYegua ya tenía declaradas las propiedades nombre y raza, aquí lo tengo que volver a hacer porque no hay manera de que una constructor function supertype
//le pase a una constructor function subtype lo que tiene entre {} (en cambio las classes tienen la maravillosa 'super'). Así pues, por ejemplo, HijaCaballo, y las instances
//creadas con ella, no tiene acceso a numeroDePatas. Esta propiedad queda sólo en mulita y mulita2, instances de MamaYegua.
//HijaCaballo en realidad no es una hija de MamaYegua: es simplemente una constructor function a la que se le copió su prototype (o sea más bien HijastraCaballo o algo
//como el niño robot de A.I.)

HijaCaballo.prototype = Object.create(MamaYegua.prototype);
//Se le da a HijaCaballo lo que hay en el prototype de MamaYegua. ¿No es como pendejada y pudo habérsele dado directamente a HijaCaballo?

let nietaCaballo = new HijaCaballo("Babieca", "zarca", "relincho");
//Una instance de HijaCaballo. A través de HijaCaballo, le llega lo que MamaYegua tiene en el prototype.

HijaCaballo.prototype.constructor = HijaCaballo;
//Como a HijaCaballo se le dio elprototype de MamaYegua, sus instances van a quedar con constructor: MamaYegua y no HijaCaballo. Para arrglarlo, se actualiza
//(se puede hacer antes o después de crear las instances).

function HijaBurro(nombre, raza, sonido) {
  this.nombre = nombre;
  this.raza = raza;
  this.sonido = sonido;
}
//De aquí para abajo, equivalente a lo hecho con HijaCaballo. La variación es que no puse el método rebuznar() en la declaración para poder meterlo al prototype luego.

HijaBurro.prototype = Object.create(MamaYegua.prototype);

HijaBurro.prototype.constructor = HijaBurro;

let nietaBurro = new HijaBurro("Platera", "rucia", "rebuzno");
//Un object instance de class de HijaBurro.

HijaBurro.prototype.rebuznar = function () {
  return `${this.presentarse()} y hago 'ijooo, ijooo!'`;
};
//Añado el método rebuznar al prototype. Lo puedo hacer antes o después de crear las instances.
