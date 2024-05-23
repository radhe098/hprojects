 // Importing authenticate function from @onflow/fcl
// import Home from "@/components/Home"; // Importing Home component using a relative path
import Login from "@/app/login/login"

export default function HomePage() { // Renaming the function to avoid conflicts with the imported component
  return (
    < >
      hi{/* Rendering the Home component */}
      <Login /> Rendering the Home component
    </>
  );
}