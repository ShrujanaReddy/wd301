import React, { Suspense } from "react";
const MemberList = React.lazy(() => import("./MemberList"));
import NewMember from "./NewMember";
import ErrorBoundary from "../../components/ErrorBoundary";
import { useTranslation } from "react-i18next"; 

 
const Members = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">{t("Members")}</h2>
        <NewMember />
      </div>
      <ErrorBoundary>
        <Suspense>
          <MemberList />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default Members;
