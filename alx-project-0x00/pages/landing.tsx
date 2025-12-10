import Card from "@/components/Card";
import Button from "@/components/Button";


const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>

      <Card />

      {/* Buttons Section */}
      <div className="mt-8 flex flex-col gap-6">

        {/* Small Buttons */}
        <div className="flex gap-4 flex-wrap">
          <Button title="Small - SM" className="text-sm rounded-sm" />
          <Button title="Small - MD" className="text-sm rounded-md" />
          <Button title="Small - FULL" className="text-sm rounded-full" />
        </div>

        {/* Medium Buttons */}
        <div className="flex gap-4 flex-wrap">
          <Button title="Medium - SM" className="text-base rounded-sm" />
          <Button title="Medium - MD" className="text-base rounded-md" />
          <Button title="Medium - FULL" className="text-base rounded-full" />
        </div>

        {/* Large Buttons */}
        <div className="flex gap-4 flex-wrap">
          <Button title="Large - SM" className="text-lg rounded-sm" />
          <Button title="Large - MD" className="text-lg rounded-md" />
          <Button title="Large - FULL" className="text-lg rounded-full" />
        </div>

      </div>
    </div>
  );
};

export default Landing;
