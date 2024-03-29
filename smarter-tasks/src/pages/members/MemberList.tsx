import React, { Suspense, useEffect } from 'react';
import { fetchMembers } from "../../context/members/actions";
import { useMembersDispatch } from "../../context/members/context";
import ErrorBoundary from '../../components/ErrorBoundary';
const MemberListItems = React.lazy(() => import("./MemberListItems"));

const MemberList: React.FC = () => {
  const dispatch = useMembersDispatch();
  
  useEffect(() => {
    fetchMembers(dispatch);
  }, [dispatch]);
  
  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      {/*To keep this file clean, I'll move all the logic to access the members 
       from our app-state, to a new component MemberListItems */}
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <MemberListItems />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default MemberList;
