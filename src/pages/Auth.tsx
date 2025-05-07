
import { Navigate } from 'react-router-dom';

const Auth = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-wedding-cream py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-cormorant font-semibold text-wedding-mauve mb-2">K&J Wedding</h1>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Welcome
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            This site is currently under development.
          </p>
        </div>

        <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <p>Authentication has been disabled.</p>
            <Navigate to="/" replace />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
