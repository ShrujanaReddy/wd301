import { TrashIcon } from "@heroicons/react/24/outline";
import { fetchMembers, removeMember } from "../../context/members/actions";

import {
  useMembersState,
  useMembersDispatch,
} from "../../context/members/context";

export default function MemberListItems() {
  const dispatchMembers = useMembersDispatch();
  const state = useMembersState();
  const { members, isLoading, isError, errorMessage } = state || {};

  if (!members) {
    return <span>Loading...</span>;
  }

  const handleDelete = async (id: number) => {
    try {
      const result = await removeMember(dispatchMembers, id);

      if (result.ok) {
        await fetchMembers(dispatchMembers);
      } else {
        console.error("Error deleting member:", result.error);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    <>
      {members.map((member: any) => (
        <div
          key={member.id}
          className={`member block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}
        >
         <h5 className="mb-2 text-x font-medium tracking-tight text-gray-500 dark:text-white">
            Email: {member.email}
          </h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            Name: {member.name}
          </h5>
          <button
            type="button"
            onClick={() => handleDelete(member.id)}
            className="delete-btn"
          >
            <TrashIcon className="w-6 h-6 ml-2" />
          </button>
        </div>
      ))}
    </>
  );
}
