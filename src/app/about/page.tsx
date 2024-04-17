import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <div className="border-b-2 border-black pb-2 mb-4">
        <h1 className="text-3xl font-bold">Paul Jimenez</h1>
      </div>
      <div className="flex flex-wrap gap-4 sm:justify-center lg:mt-15">
        <div className="flex-1 md:min-w-[420px]">
          <h1 className="text-lg font-bold mb-4">About me</h1>
          <p className="text-base mb-4">
            I am an experienced full stack engineer with a passion for creating
            innovative and user-friendly applications. With over 5 years of
            experience, I have learned to deal with ambiguity and make informed
            decisions by prioritizing not only technical aspects but also all
            the other factors that make a great product.
          </p>
          <p className="mb-4">
            JavaScript/TypeScript libraries and frameworks are my strong suit.
            However, I am also familiar with other programming languages and
            mobile apps. I approach new technologies with enthusiasm and a
            commitment to improve continuously.
          </p>
          <p className="mb-4">
            What sets me apart is my ability to write clean, efficient code, and
            find areas of opportunity to improve the code base. I bring hands-on
            experience building, testing and integrating complex systems using
            cloud services such as AWS and Azure. I am a problem solver, and love
            working collectively towards making incredible products.
          </p>
        </div>
        <div>
          <Image
            src="/about.JPG"
            alt="Me in the forest"
            priority
            height={800}
            width={500}
          />
        </div>
      </div>
      <ul className="mt-4">
        <li>
          <a
            href="mailto:pjf2180@gmail.com"
            className="flex gap-2 font-semibold items-center"
          >
            <div className="h-4 w-4">
              {/* Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
              </svg>
            </div>
            pjf2180@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/paul-jimenez-676110172/"
            className="flex items-center gap-2 font-semibold"
          >
            <div className="h-4 w-4">
              {/* !Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </div>
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}
