
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Mail, Lock, User } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const signupSchema = loginSchema.extend({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters" }),
  confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type LoginFormValues = z.infer<typeof loginSchema>;
type SignupFormValues = z.infer<typeof signupSchema>;

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { user, isLoading, signIn, signUp } = useAuth();
  const [isPending, setIsPending] = useState(false);

  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signupForm = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onLoginSubmit = async (values: LoginFormValues) => {
    setIsPending(true);
    try {
      await signIn(values.email, values.password);
    } finally {
      setIsPending(false);
    }
  };

  const onSignupSubmit = async (values: SignupFormValues) => {
    setIsPending(true);
    try {
      await signUp(values.email, values.password, values.fullName);
      // Switch to login after successful signup
      setIsLogin(true);
    } finally {
      setIsPending(false);
    }
  };

  if (user && !isLoading) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-wedding-cream py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-cormorant font-semibold text-wedding-mauve mb-2">K&J Wedding</h1>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            {isLogin ? "Sign in to your account" : "Create your account"}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isLogin ? "To manage your RSVP and access wedding details" : "To RSVP and access wedding details"}
          </p>
        </div>

        <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
          {isLogin ? (
            <Form {...loginForm}>
              <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-6">
                <FormField
                  control={loginForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="flex rounded-md ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                          <span className="flex items-center pl-3 text-gray-500 sm:text-sm">
                            <Mail className="h-4 w-4" />
                          </span>
                          <Input 
                            placeholder="email@example.com" 
                            className="border-0 focus-visible:ring-0 rounded-none rounded-r-md pl-2" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="flex rounded-md ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                          <span className="flex items-center pl-3 text-gray-500 sm:text-sm">
                            <Lock className="h-4 w-4" />
                          </span>
                          <Input 
                            type="password" 
                            placeholder="••••••" 
                            className="border-0 focus-visible:ring-0 rounded-none rounded-r-md pl-2" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col space-y-4">
                  <Button type="submit" disabled={isPending} className="bg-wedding-mauve hover:bg-wedding-mauve/80">
                    {isPending ? "Signing in..." : "Sign in"}
                  </Button>
                  <div className="text-center">
                    <button
                      type="button"
                      className="text-sm text-wedding-mauve hover:underline"
                      onClick={() => setIsLogin(false)}
                    >
                      Don't have an account? Sign up
                    </button>
                  </div>
                </div>
              </form>
            </Form>
          ) : (
            <Form {...signupForm}>
              <form onSubmit={signupForm.handleSubmit(onSignupSubmit)} className="space-y-6">
                <FormField
                  control={signupForm.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <div className="flex rounded-md ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                          <span className="flex items-center pl-3 text-gray-500 sm:text-sm">
                            <User className="h-4 w-4" />
                          </span>
                          <Input 
                            placeholder="John Smith" 
                            className="border-0 focus-visible:ring-0 rounded-none rounded-r-md pl-2" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signupForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="flex rounded-md ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                          <span className="flex items-center pl-3 text-gray-500 sm:text-sm">
                            <Mail className="h-4 w-4" />
                          </span>
                          <Input 
                            placeholder="email@example.com" 
                            className="border-0 focus-visible:ring-0 rounded-none rounded-r-md pl-2" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signupForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="flex rounded-md ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                          <span className="flex items-center pl-3 text-gray-500 sm:text-sm">
                            <Lock className="h-4 w-4" />
                          </span>
                          <Input 
                            type="password" 
                            placeholder="••••••" 
                            className="border-0 focus-visible:ring-0 rounded-none rounded-r-md pl-2" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signupForm.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <div className="flex rounded-md ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                          <span className="flex items-center pl-3 text-gray-500 sm:text-sm">
                            <Lock className="h-4 w-4" />
                          </span>
                          <Input 
                            type="password" 
                            placeholder="••••••" 
                            className="border-0 focus-visible:ring-0 rounded-none rounded-r-md pl-2" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col space-y-4">
                  <Button type="submit" disabled={isPending} className="bg-wedding-mauve hover:bg-wedding-mauve/80">
                    {isPending ? "Creating account..." : "Create account"}
                  </Button>
                  <div className="text-center">
                    <button
                      type="button"
                      className="text-sm text-wedding-mauve hover:underline"
                      onClick={() => setIsLogin(true)}
                    >
                      Already have an account? Sign in
                    </button>
                  </div>
                </div>
              </form>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
