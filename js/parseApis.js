const ParseURL = 'http://localhost:1337/parse/functions/';
const RestURL = 'http://localhost:1337/parse/'; // Add this line
const AppID = 'YOUR_PARSE_APP_ID';
const ContentType = 'application/json';

Parse.initialize('YOUR_PARSE_APP_ID');
Parse.serverURL = 'http://localhost:1337/parse/';

const FETCH_HEADERS = {
  "Content-Type": ContentType,
  "X-Parse-Application-Id": AppID,
}

class ParseApi {
  static async sayHello() {
    const response = await fetch(ParseURL + 'whoami', {
      method: "POST",
      headers: FETCH_HEADERS,
      body: JSON.stringify({
        "name": "아이유",
        "money": 1000000000000,
      })
    });


    
    console.log(response);

    return response.json(); // get body stream
  }
}

class ParseApi2 {
      
static async itemList() {
    const response = await fetch(ParseURL + 'getItemList', {
      method: "POST",
      headers: FETCH_HEADERS,
      body: JSON.stringify({
        "name": "아이유",
        "money": 1000000000000,
      })
    });
  
      console.log(response);
  
      return response.json(); // get body stream
    }
}


class ParseApi3 {
      
    static async signUp(username, password) {
     /*   const response = await fetch(ParseURL + 'signUp', {
          method: "POST",
          headers: FETCH_HEADERS,
          body: JSON.stringify({
            username,
            password,
          })
        });
    
        console.log(response);
      
        return response.json();
      }    
    */ 
    const response = await Parse.Cloud.run('signUp', {username, password});
    console.log(response);
    // Parse의 결과를 Json으로 바꾸는 코드
    return response.toJSON();
    }
      
}
    

class ParseApi4 {
   
    
  /*    static async signIn(username, password) {
        const response = await fetch(RestURL + 'login', { // User RestURL
          method: "POST",
          headers: FETCH_HEADERS,
          body: JSON.stringify({
            username,
            password,
          })
        });
    
        console.log(response);
    

        return response.json();
      }
    */
      static async signIn(username, password) {
        const user = await Parse.User.logIn(username, password);
      return user.toJSON();
      }

    }

