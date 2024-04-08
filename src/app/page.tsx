import { Background } from "./components/background/background.component";
import { Header } from "./components/header/header.component";

export default function Home() {
  return (
    <div className="container mx-auto px-12 fixed top-0 left-0 h-full flex flex-col justify-center">
      <Background />
      <Header text="I'm Paul Jiménez" />
      <Header typeAnimation text="Full Stack Software Engineer" />
    </div>
  );
}
