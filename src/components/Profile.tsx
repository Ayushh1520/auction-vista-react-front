import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './Login';
import LogoutButton from './Logout';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
          <div className="text-center">
            <div className="mb-4">
              <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome</h2>
            <p className="text-gray-600 mb-6">Please log in to view your profile and access your account.</p>
            <LoginButton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img 
                  src={user?.picture} 
                  alt={user?.name} 
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
                />
                <div className="text-white">
                  <h1 className="text-2xl font-bold">{user?.name}</h1>
                  <p className="text-blue-100 opacity-90">{user?.email}</p>
                </div>
              </div>
              <LogoutButton />
            </div>
          </div>

          {/* Profile Details Section */}
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Profile Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
                <p className="text-lg text-gray-900">{user?.name || 'Not provided'}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
                <p className="text-lg text-gray-900">{user?.email || 'Not provided'}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-500 mb-1">User ID</label>
                <p className="text-sm text-gray-600 font-mono break-all">{user?.sub || 'Not available'}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-500 mb-1">Email Verified</label>
                <div className="flex items-center">
                  {user?.email_verified ? (
                    <>
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-green-600 font-medium">Verified</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-red-600 font-medium">Not Verified</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Additional Info */}
            {user?.updated_at && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <span className="font-medium">Last Updated:</span> {new Date(user.updated_at).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;