import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
        Are you sure you want to do this?

        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo={"Today at 4:45PM"}
          comments={"Alex like this"}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo={"Today at 2:00AM"}
          comments={"Strange to Jane"}
          avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={"Sam"}
          timeAgo={"Yesterday at 5:00AM"}
          comments={"Speechless"}
          avatar={faker.image.avatar()}/>
      </ApprovalCard>
    </div>
  )

};
ReactDOM.render(<App/>, document.querySelector('#root'));