// events.js

eventHandlers = {
    eventSelectors: {
        'button#play': {
            eventType: 'click',
            eventHandler: { 
                handleEvent: function (event) {
                    alert('Element clicked!')
                }
            }
        }
    }
}