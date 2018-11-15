<<<<<<< HEAD
 import * as api from './api_access'

 window.fbAsyncInit = function() {
    FB.init({
      appId      : '229499281294300',
=======
import * as api from './api_access'

window.fbAsyncInit = function() {
    FB.init({
      appId      : '296547064527762',
>>>>>>> 4f727c37e4eea66f924e1fd2d530e4c7b5f8b455
      cookie     : true,
      xfbml      : true,
      version    : 'v3.0'
    });
      
    FB.AppEvents.logPageView();   
<<<<<<< HEAD

    
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
      
=======
    
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
>>>>>>> 4f727c37e4eea66f924e1fd2d530e4c7b5f8b455
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   export function FBLogin(){
<<<<<<< HEAD
       FB.login(response => statusChangeCallback(response),
       {scope: 'public_profile, email'})
   }

   function statusChangeCallback(response){
       FB.api("/me", me => {
            console.log(me);
            api.Login(me.name, response.authResponse.userId, authResponse.accessToken);
=======
       FB.login(
           response => statusChangeCallback(response),
           {scope: 'public_profile,email'}
       )
   }

   function statusChangeCallback(response){
       console.log(response);
       FB.api("/me", me => {
        console.log(me);
        api.Login(me.name, response.authResponse.userID, response.authResponse.accessToken)

>>>>>>> 4f727c37e4eea66f924e1fd2d530e4c7b5f8b455
       })
   }