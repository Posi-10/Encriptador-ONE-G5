const eventListener = ( element, event, callback ) => element?.addEventListener( event, callback);

const selector = ( selector ) => document.querySelector( selector );

export {
  eventListener,
  selector,
};