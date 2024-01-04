AFRAME.registerComponent('toggle-annotation1', {
    init: function () {
        this.el.addEventListener('click', () => {
            const parentEntity = this.el.parentElement;

            // Find the child entities with class names 'annotation-text' and 'annotation-plane'
            const textEntity = parentEntity.querySelector('.annotation-text');
            const planeEntity = parentEntity.querySelector('.annotation-plane');

            if (textEntity && planeEntity) {
                // Toggle visibility of the corresponding annotation text and plane
                const textVisible = textEntity.getAttribute('visible');
                const planeVisible = planeEntity.getAttribute('visible');

                textEntity.setAttribute('visible', !textVisible);
                planeEntity.setAttribute('visible', !planeVisible);
            }
        });
    }
});

AFRAME.registerComponent('toggle-annotation2', {
    init: function () {
        this.el.addEventListener('click', () => {
            const parentEntity = this.el.parentElement;

            // Find the child entities with class names 'annotation-text' and 'annotation-plane'
            const textEntity = parentEntity.querySelector('.annotation-text');
            const planeEntity = parentEntity.querySelector('.annotation-plane');

            if (textEntity && planeEntity) {
                // Toggle visibility of the corresponding annotation text and plane
                const textVisible = textEntity.getAttribute('visible');
                const planeVisible = planeEntity.getAttribute('visible');

                textEntity.setAttribute('visible', !textVisible);
                planeEntity.setAttribute('visible', !planeVisible);
            }
        });
    }
});

// Connect to your MQTT broker
const clientID = 'mqtt-explorer-3caa54bc';
const host = 'localhost';   
const port = 9001;  
//userId  = document.getElementById("username").value;  
//passwordId = document.getElementById("password").value;  
const client = new Paho.MQTT.Client(host,Number(port),clientID);
// Connect to the MQTT broker
client.connect({
    onSuccess: function () {
    console.log("Connected to MQTT broker");
    // Subscribe to the MQTT topic
    client.subscribe('example');
    client.onMessageArrived = function (message) {
    // Update A-Frame entities based on MQTT data
    const mqttData = JSON.parse(message.payloadString);
    updateAFrameEntities(mqttData);
    };
    },
    onFailure: function (responseObject) {
    console.log("Failed to connect to MQTT broker: " + responseObject.errorMessage);
    }
});
// Function to update A-Frame entities
function updateAFrameEntities(data) {
// Update the text entity with MQTT data
const mqttText = document.getElementById('mqttText');
if (mqttText) {
    mqttText.setAttribute('align', 'center');
    mqttText.setAttribute('scale', '0.3 0.3 0.3'); 
    mqttText.setAttribute('value', 'MQTT Data: ' + data);
}}

AFRAME.registerComponent('toggle-annotation3', {
    init: function () {
        this.el.addEventListener('click', () => {
            const parentEntity = this.el.parentElement;

            // Find the child entities with class names 'annotation-text' and 'annotation-plane'
            const textEntity = parentEntity.querySelector('.annotation-text');
            const planeEntity = parentEntity.querySelector('.annotation-plane');

            //if (textEntity && planeEntity) {
                // Toggle visibility of the corresponding annotation text and plane
                const textVisible = textEntity.getAttribute('visible');
                const planeVisible = planeEntity.getAttribute('visible');

                textEntity.setAttribute('visible', !textVisible);
                planeEntity.setAttribute('visible', !planeVisible);
            //}
        });
    }
});


