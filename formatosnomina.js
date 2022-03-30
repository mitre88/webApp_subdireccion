
Notification.requestPermission(function(){ 
    if (Notification.permission === 'granted') {
        // user approved.
        // use of new Notification(...) syntax will now be successful
    } else if (Notification.permission === 'denied') {
        // user denied.
    } else { // Notification.permission === 'default'
        // user didn’t make a decision.
        // You can’t send notifications until they grant permission.
    }
});

function notificationDelay(){
    setTimeout(function(){new Notification('Dirección de Nóminas', { body: ' App de Nóminas '});
},5000)
};
// llamanos a la función de notificaciones ....
notificationDelay();


alert("Bienvenido a la Dirección de Nómina");
setTimeout(function(){alert( ` accede a nuestro sitio www.sev.gob.mx `)},5000);


