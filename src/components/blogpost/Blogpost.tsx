import type React from "react";
import { Button, Card } from "flowbite-react";
import arrow_right from "../../ui/arrow_right.svg";

interface Props {
  url: string;
  title: string;
  date: string;
}

const Blogpost: React.FC<Props> = ({ url, title, date }) => {
  return (
    <Card className="max-w-sm p-4">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{date}</p>
      <Button className="text-gray-700 dark:text-gray-400" href={url}>
        Read more
        <img src={arrow_right} alt="arrow right" />
      </Button>
    </Card>
  );
};

export default Blogpost;
