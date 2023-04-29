// Importaciones
import Encrypt from "./class/Encrypt.js";
import { selector, eventListener } from "./components/dom.js";
import { dictionary } from "./data/dictionary.js";

// Variables
const message = selector('#message');
const result = selector('#result');
const btnEncrypt = selector('#btn-encrypt');
const btnDecrypt = selector('#btn-decrypt');
const btnCopy = selector('#btn-copy');
const output = selector('#output');
const divSecreto = selector('#div-secreto');

// Clase
const encrypt = new Encrypt( dictionary );

// Eventos
eventListener( message, 'input', () => encrypt.validation( message ) );
eventListener( btnEncrypt, 'click', () => encrypt.encrypt( message, result, output, divSecreto ) );
eventListener( btnDecrypt, 'click', () => encrypt.decrypt( message, result, output, divSecreto ) );
eventListener( btnCopy, 'click', () => encrypt.copy( result, divSecreto, output ) );