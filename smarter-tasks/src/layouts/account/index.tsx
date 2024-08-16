import { Outlet } from "react-router-dom"
import Appbar from "./Appbar"
import { useTranslation } from "react-i18next";

const AccountLayout = () => {
  const date = new Date();  
  const {i18n} = useTranslation();  
  
  // Create a date formatter for a specific locale  
  const dateFormatter = new Intl.DateTimeFormat(i18n.language, {  
    year: "numeric",  
    month: "long",  
    day: "numeric",  
  });  
  const timeFormatter = new Intl.DateTimeFormat(i18n.language, {  
    hour: "numeric",  
    minute: "numeric",  
    second: "numeric",  
  });
  const formattedDate = dateFormatter.format(date);
  const formattedTime = timeFormatter.format(date);
  return (
    <>
      <div className="w-full">
        <Appbar />
        <main>
          <div>
            <h3>{`Welcome to the application!`}</h3>
            <p>{`Today's date is: ${formattedDate}`}</p>
            <p>{`Current time is: ${formattedTime}`}</p>
          </div>
          <div className="py-6 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  )
}

export default AccountLayout