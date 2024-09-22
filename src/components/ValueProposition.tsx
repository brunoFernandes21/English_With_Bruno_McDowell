import { DollarSignIcon, RocketIcon, StarIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

const ValueProposition = () => {
  const propositions = [
    { title: "Early launch", icon: <RocketIcon className="w-16 h-16" /> },
    { title: "Exclusive content", icon: <StarIcon className="w-16 h-16" /> },
    { title: "Discounts", icon: <DollarSignIcon className="w-16 h-16" /> },
  ];
  return (
    <div className="max-w-full mt-10 lg:mt-16">
      <h2 className="mb-8 text-center text-xl md:text-2xl lg:text-3xl font-semibold">
        By joining the waitlist, you'll receive:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10 max-w-md md:max-w-4xl mx-auto ">
        {propositions.map((value) => (
          <Card
            key={value.title}
            className="flex flex-col justify-center items-center h-64 transition-all ease-in-out duration-500 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:shadow-indigo-500 shadow-lg"
          >
            <CardHeader>{value.icon}</CardHeader>
            <CardContent className="font-semibold">{value.title}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ValueProposition;
