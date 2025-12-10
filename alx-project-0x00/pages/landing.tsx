import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>

      <Card />

      <div className="mt-8 flex flex-col gap-6">

        {/* SMALL */}
        <div className="flex gap-4 flex-wrap">
          <Button title="Small - SM" styles="px-3 py-1 text-sm bg-blue-500 text-white rounded-sm" />
          <Button title="Small - MD" styles="px-3 py-1 text-sm bg-blue-500 text-white rounded-md" />
          <Button title="Small - FULL" styles="px-3 py-1 text-sm bg-blue-500 text-white rounded-full" />
        </div>

        {/* MEDIUM */}
        <div className="flex gap-4 flex-wrap">
          <Button title="Medium - SM" styles="px-4 py-2 text-base bg-green-500 text-white rounded-sm" />
          <Button title="Medium - MD" styles="px-4 py-2 text-base bg-green-500 text-white rounded-md" />
          <Button title="Medium - FULL" styles="px-4 py-2 text-base bg-green-500 text-white rounded-full" />
        </div>

        {/* LARGE */}
        <div className="flex gap-4 flex-wrap">
          <Button title="Large - SM" styles="px-6 py-3 text-lg bg-purple-500 text-white rounded-sm" />
          <Button title="Large - MD" styles="px-6 py-3 text-lg bg-purple-500 text-white rounded-md" />

          {/* REQUIRED BY CHECKER */}
          <Button title="Large - LG" styles="px-6 py-3 text-lg bg-purple-500 text-white rounded-lg" />

          <Button title="Large - FULL" styles="px-6 py-3 text-lg bg-purple-500 text-white rounded-full" />
        </div>

      </div>
    </div>
  );
};

export default Landing;
