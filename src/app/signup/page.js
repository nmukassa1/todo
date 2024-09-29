import Link from 'next/link';
import SignUpForm from '../components/SignUpForm';

export default function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <SignUpForm />
        <p className="mt-4 text-center">
          Already have an account? <Link href="/signin" className='text-blue-500 hover:underline'>Sign In</Link>
        </p>
      </div>
    </div>
  );
}