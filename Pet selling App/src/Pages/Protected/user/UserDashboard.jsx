import React from 'react'
import { useAuth } from "../../../context api/authContext";
import UserSideBar from '../../../components/DashComponents/UserSideBar';

const UserDashboard = () => {

  const [auth, setAuth] = useAuth();

  // Loading state
  if (!auth.user) {
    return <div>Loading...</div>;
  }

  return (
    <>
          <div>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-24">
          <div className="flex h-screen bg-gray-100">
            {/* sidebar */}
            <UserSideBar />
            {/* Main content */}
            <div className="flex flex-col flex-1 overflow-y-auto">
              <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
                <h1 className="text-2xl uppercase font-semibold px-5">
                  User Dashboard
                </h1>
              </div>
              <div className="p-4">
                <div className="bg-white dark:bg-black overflow-hidden shadow rounded-lg border">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium uppercase text-gray-900 dark:text-slate-50">
                      User Profile
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-slate-500">
                      Welcome To Dashboard Page, {auth.user.fullName} ! We Delighted To See You Here : )
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 dark:text-slate-50">
                          Full name
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-slate-50">
                          {auth.user.fullName}
                        </dd>
                      </div>
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 dark:text-slate-50">
                          Email address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-slate-50">
                          {auth.user.email}
                        </dd>
                      </div>
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 dark:text-slate-50">
                          Phone number
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-slate-50">
                          {auth.user.phone}
                        </dd>
                      </div>
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 dark:text-slate-50">
                          Address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-slate-50">
                          {auth.user.address}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDashboard