
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Google } from 'lucide-react';

const Auth = () => {
  const { user, isLoading, signInWithGoogle } = useAuth();

  if (user && !isLoading) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-wedding-cream py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-cormorant font-semibold text-wedding-mauve mb-2">K&J Wedding</h1>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            To manage your RSVP and access wedding details
          </p>
        </div>

        <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col space-y-4">
            <Button 
              onClick={signInWithGoogle} 
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2"
              variant="outline"
            >
              <Google className="h-4 w-4" />
              {isLoading ? "Signing in..." : "Continue with Google"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
