const api_root = "http://localhost:80/game";
export let playerId = null;

export function GetState(){
    return myFetch(api_root + "/");
}
export function GetMyCaptions(){
    return myFetch(api_root + `/captions/${playerId}`);
}
export function Login(name, fbid, access_token){
<<<<<<< HEAD
    return myFetch(api_root + `/players`, { name: name, fbid: fbid, access_token: access_token })
=======
    return myFetch(api_root + `/players`, { name, fbid, access_token })
>>>>>>> 4f727c37e4eea66f924e1fd2d530e4c7b5f8b455
            .then(x=> playerId = x.id);
}
export function FlipPicture(){
    return myFetch(api_root + "/picture", {})
}
<<<<<<< HEAD
=======

>>>>>>> 4f727c37e4eea66f924e1fd2d530e4c7b5f8b455
export function SubmitCaption(c){
    return myFetch(api_root + "/playedCaptions", {text: c})
}
export function ChooseCaption(c){
<<<<<<< HEAD
    return myFetch(api_root + "/playedCaptions/choose", {text: c.text})
=======
    return myFetch(api_root + "/playedCaptions/choose",  {text: c.text})
>>>>>>> 4f727c37e4eea66f924e1fd2d530e4c7b5f8b455
}





  function myFetch(url = ``, data = null) {
      let options = {
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
            headers: {
                playerId: playerId
            }
      };
      if(data){
          options = { 
            ...options,
            method:  "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                ...options.headers,
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
          };
      }
      return fetch(url, options)
      .then(response =>{
        return response.json()
      }); // parses response to JSON
  }