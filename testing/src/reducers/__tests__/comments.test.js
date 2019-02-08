import commentsReducer from 'reducers/comments';
import {SAVE_COMMENT} from "actions/types";

it('handles actions SAVE_COMMENT', ()=>{
  const action = {
    type: SAVE_COMMENT,
    payload: 'new comment'
  };
  const newState = commentsReducer([],action);
  expect(newState).toEqual(['new comment']);
})

it('handles actions with unknown type', ()=>{
  const action = {
    type: "UNKNOW_TYPE",
    payload: 'new comment'
  };
  const newState = commentsReducer(['1'],action);
  expect(newState).toEqual(['1']);
})