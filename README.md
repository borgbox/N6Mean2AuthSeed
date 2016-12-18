# Mean2MessageCrudFinal
Seed with authentication

<h2>Install</h2>

<p>npm install
<br>

<h2>Build</h2>

<h4>Development</h4>
<p>npm run build
<br>
<h4>Producton</h4>
<p>npm run build:prod
<br>

<h2>Execute</h2>

<p>npm start
<br>

<h2>Setting enviroment variables</h2>
<h4>Heroku</h4>
<p>heroku config:set VARIABLE='Valor'
<br>

<h4>Windows</h4>
<p>set VARIABLE='Valor'
<br>

<hr>
<h3>Reference for authentication</h3>
http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial
<br>
<h3>References for jquery bootstrap</h3>
http://valor-software.github.io/ng2-bootstrap
<br>
https://github.com/ghillert/angular2-webpack-starter-bootstrap
<br>
<h3>Reference for internationalization(not used yet)</h3>
https://github.com/ocombe/ng2-translate
<br>
<h2>References i18n</h2>
<h3>Install angular cli is a pre-requisite:</h3>
npm install @angular/compiler-cli @angular/platform-server --save
<h4>Execute commands through Windows OS to create de file</h4>
 "./../../node_modules/.bin/ng-xi18n"
 <br>
 The command should be execute inside the folder where the file must be created
 in this example the fil was originally created inside assets/app and after moved to locale folder
<h4>Official reference</h4>
https://angular.io/docs/ts/latest/cookbook/i18n.html#!#ng-xi18n
<h4>Reference to make work with webpack</h4>
http://stackoverflow.com/questions/39498629/angular2-and-webpack-i18n-plugin-vs-ng2-translate
<br>
The configuration in main.ts allows to dynamically change locale and translation files, the dynamic data e logic selection is inside settings.service.ts
<br>
The file /locale/message.ts carries and export the translations to be used.