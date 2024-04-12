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
            I'm an experienced full stack engineer with a passion for creating
            innovative and user-friendly applications. With over 5 years of
            experience, I’ve learned to deal with ambiguity and make informed
            decisions by prioritizing not only technical aspects but also all
            the other factors that make a great product.
          </p>
          <p className="mb-4">
            JavaScript/TypeScript libraries and frameworks are my strong suit.
            However, I’m also familiar with other programming languages and
            mobile apps. I approach new technologies with enthusiasm and a
            commitment to improve continuously.
          </p>
          <p className="mb-4">
            What sets me apart is my ability to write clean, efficient code, and
            find areas of opportunity to improve the code base. I bring hands-on
            experience building, testing and integrating complex systems using
            cloud services such as AWS and Azure. I'm a problem solver, and love
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
    </div>
  );
}
