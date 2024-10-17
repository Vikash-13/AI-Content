import { Button } from '@/components/ui/button';
import { useClerk } from '@clerk/nextjs';
// import { Button } from '@shadcn/ui/button';

const SignOutButton = () => {
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    await signOut({ redirectUrl: '/' }); // Redirect to the homepage after sign out
  };

  return (
    <Button variant="destructive" onClick={handleSignOut} className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 ml-4 rounded shadow-lg transition-all duration-200 ease-in-out">
      Sign Out
    </Button>
  );
};



export default SignOutButton;
