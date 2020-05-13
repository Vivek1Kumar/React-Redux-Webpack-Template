// import { MOVIE_REVIEW, MOVIE_DETAILS } from '../actions/types';

// const initialState = {
//   loader: false,
//   movieReviews: []
// };

// export default function(state = initialState, action) {
  
//   switch (action.type) {
//     case MOVIE_REVIEW:
//       return {
//         ...state,
//         movieReviews: [action.payload, ...state.movieReviews],
//         loader: true
//       }
//     case MOVIE_DETAILS: {
//       return {
//         ...state,
//         movieDetails: action.payload
//       }
//     }
//     default:
//       return state;
//   }
// }
