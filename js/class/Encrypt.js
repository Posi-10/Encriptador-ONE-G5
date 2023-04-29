export default class Encrypt {

  constructor( dictionary ) {

    this.dictionary = dictionary;

  }

  cipher( message, expression, dictionary ){

    let text = message.value
      
    if( !text )
      throw (alert('No hay mensaje'), Error(`Message is undefined`));
    
    return message.value.replace( this.regExp( expression ), ( matched ) => dictionary[matched] );
    
  }

  encrypt( message, element, activate, deactivate ) {
    
    const expression = this.dictionary
    
    this.messageUndefind(message.value, activate, deactivate);

    element.value = this.cipher( message, Object.keys( expression ).join( '|' ), expression );
    message.value = '';
    
  }
  
  decrypt( message, element, activate, deactivate ) {

    const expression = this.reversedDictionary(this.dictionary);
    
    this.messageUndefind(message.value, activate, deactivate);

    element.value = this.cipher( message, Object.keys( expression ).join( '|' ), expression );
    message.value = '';
    
  }
  
  regExp ( regex ) {

    const expression = new RegExp( regex, 'g');

    return expression;

  }

  reversedDictionary( dictionary ) {

    const reversedDictionary = {};

    for (const key in dictionary) {
      if (dictionary.hasOwnProperty(key)) {
        reversedDictionary[dictionary[key]] = key;
      }
    }

    return reversedDictionary;
  }

  validation( message ) {
    
    const text = message.value.toLowerCase()
    const regex = /^[a-z\b\s]+$/;
    const isValid = regex.test(text);
    const arr = text.split('');
    
    if (!isValid) {
      arr.pop();
    }
    
    message.value = arr.join('')

  }

  copy( message, activate, deactivate ) {

    activate.classList.remove("hidden");
    deactivate.classList.add("hidden");

    navigator.clipboard.writeText(message.value);

    message.value = ""

  }

  messageUndefind( message, activate, deactivate ){
    
    if( message ) {

      activate.classList.remove("hidden");
      deactivate.classList.add("hidden");

    } else {

      activate.classList.add("hidden");
      deactivate.classList.remove("hidden");

    }

  }

}