# ZEMOGA

## React Native ANDROID

Libreria utilizadas:

- react-native": "0.68"
- react-navigation and its dependencies - permitira gestionar la navegación dentro de la aplicación
- redux, redux persist and redux thunk - permitira gestionar los cambios de estados de las varibles utilizadas
- react native vector icons - iconos expuestos en la aplicación
- react-native async storage - permitira guardar en cache la información que se requiera

## Arquitectura

-src -> carpeta raiz del proyecto
--api -> conexionessobre la api de jsonplaceholder
--components -> componentes visuales atomizados
--routes -> enrutamiento de la aplicación
--screens -> estructura de las pantallas de la aplicación
--store -> gestión de los estados de los atributos de la aplicación
--themes -> configuración global de los estilos
--utils -> contantes o configuración global

Esta es una plantilla base y configurada para el cumplimiento del reto técnico
Plantilla: https://github.com/apurvajain/todo-app.git

## Ejecutar la aplicación

1. Run `npm install` to install dependencies
2. Run `npx pod-install` from root of your project
3. Start the packager with `npm start`
4. Connect your device or use emulator that's installed in your pc
5. Run the test application:

- On Android:
  - Run `npx react-native run-android`
- On iOS:
  - Open `npx react-native run-ios`
