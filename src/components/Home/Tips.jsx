import { Card, Link } from "@heroui/react";
import { GiWaterDrop } from "react-icons/gi";
import { FaSun,FaAppleAlt  } from "react-icons/fa";

const Tips = () => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-[34px] font-extrabold text-center md:text-left">
        SUMMER <span className="text-yellow-500">CARE TIPS</span>
      </h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3">
        <Card className="w-[400px]">
            <GiWaterDrop size={37} color="blue" />
          <Card.Header>
            <Card.Title>Stay Hydrated in Summer</Card.Title>
            <Card.Description>
             Drink plenty of water throughout the day to prevent dehydration and keep your body energized during hot weather. Fresh fruits and natural juices can also help you stay refreshed.
            </Card.Description>
          </Card.Header>
          
        </Card>


         <Card className="w-[400px]">
            <FaSun size={37} color="gold" />
          <Card.Header>
            <Card.Title>Protect Your Skin from Sun Damage</Card.Title>
            <Card.Description>
            Always use sunscreen before going outside to protect your skin from harmful UV rays. Wearing sunglasses and light cotton clothes can also help reduce heat exposure.
            </Card.Description>
          </Card.Header>
          
        </Card>


         <Card className="w-[400px]">
            <FaAppleAlt size={37}  />
          <Card.Header>
            <Card.Title>Eat Light and Healthy Foods</Card.Title>
            <Card.Description>
            During summer, avoid oily and heavy meals. Choose fresh vegetables, fruits, and healthy snacks to keep your body cool and maintain better digestion.
            </Card.Description>
          </Card.Header>
          
        </Card>
      </div>
    </div>
  );
};

export default Tips;
