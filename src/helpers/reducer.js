
// this is the pattern 
export const initalState = {
    user: null,
    messages:null,
    requests:null
  }

  // creating the reducer function 
  export default function reducer(state, action)  {
      console.log(action)
      switch(action.type) {
          // setting the user to be used throughout the project
          case 'SET_USER':
              return {
                  ...state,
                  user: action.user
              }
              // setting the messages to be pulled in via the user id
           case 'SET_MESSAGES':
               return {
                   ...state,
                   messages: action.messages
               }
               // setting the requests to be pulled in from the api based on user id 
            case 'SET_REQUESTS': 
            return {
                ...state,
                requests: action.requests
            }   
              
          default: 
          return state;
      }
      
  }