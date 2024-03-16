
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "./dialog";

interface ModelProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const Model = ({
  description,

  title,
  children,
}: ModelProps) => {

  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="outline">Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{children} </div>
      </DialogContent>
    </Dialog>
  );
};

export default Model;
