import { Background } from "./components/background/background.component";
import { Header } from "./components/header/header.component";

export default function Home() {
  return (
    <div className="absolute top-0 left-0 right-0 z-[-1] px-4 pt-16 mx-4 h-full flex flex-col justify-center sm:pt-0">
      <Background />
      <Header text="Paul Jiménez" />
      <Header typeAnimation text="Full Stack Software Engineer" />
    </div>
  );
}
