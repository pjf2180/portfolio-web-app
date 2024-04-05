import { Background } from "./components/background/background.component";
import { Header } from "./components/header/header.component";

export default function Home() {
  return (
    <div className="h-[100vh] flex flex-col justify-center">
      <Background />
      <Header text="I'm Paul Jiménez" />
      <Header typeAnimation text="Full Stack Software Engineer" />
    </div>
  );
}
