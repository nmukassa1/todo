import Link from 'next/link';
import SignInForm from '../components/SignInForm';

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
        <SignInForm />
        <p className="mt-4 text-center">
          Don't have an account? <Link href="/signup" className='text-blue-500 hover:underline'>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}