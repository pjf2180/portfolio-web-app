import { Background } from "./components/background/background.component";
import { Header } from "./components/header/header.component";

export default function Home() {
  return (
    <div className="absolute top-0 z-[-1] pt-16 sm:pt-0 left-0 right-0 mx-4 px-4 h-full flex flex-col justify-center">
      <Background />
      <Header text="Paul Jiménez" />
      <Header typeAnimation text="Full Stack Software Engineer" />
    </div>
  );
}
