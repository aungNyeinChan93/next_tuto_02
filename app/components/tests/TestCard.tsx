import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TestCard = () => {
  return (
    <React.Fragment>
      <section className="grid grid-cols-3 p-2 my-4 gap-4 ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
              <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam, laboriosam. Magni voluptas fugit, aut ducimus ex facere
                accusantium delectus quos.
              </p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        ))}
      </section>
    </React.Fragment>
  );
};

export default TestCard;
