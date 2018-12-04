# What is MVC?

## What we will cover

* What is the M in MVC?
* What is the V in MVC?
* What is the C in MVC?

## Notes

M stands for Model and it represents the data structure you will save and give a name that represents a entity in your system.

V stands for view and it represents what you will send to the client making a request to your server.

C stands for controller and it represents the function or group of functions that will handle the incoming network request and then return the view.

The most know way to connect these 3 letters is with a rendered webpage where the client asks for the webpage, the controller receives the request, asks the model for the data that should be shown to the user, adds the data to a html document and then finally sends back the html document with the data to the client.

The flow usually goes:

client -> controller -> model -> view -> client
