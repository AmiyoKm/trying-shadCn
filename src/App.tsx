import "./App.css";
import { ModeToggle } from "./components/mode-toggle";
import { ProfileForm } from "./components/TodoList/ProfileForm";
import { ThemeProvider } from "@/components/theme-provider";



function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ModeToggle/>
    
       <div className=" mt-11 flex flex-col items-center">
        <ProfileForm/>
      </div>
      </ThemeProvider>
  );
}

export default App;
