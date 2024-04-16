import { Background } from "./components/background/background.component";
import { Header } from "./components/header/header.component";

export default function Home() {
  return (
    <div className="absolute top-0 z-[-1] pt-16 sm:pt-0 left-8 right-8 h-full px-4 flex flex-col justify-center">
      <Background />
      <Header text="Paul Jiménez" />
      <Header typeAnimation text="Full Stack Software Engineer" />
    </div>
  );
}
