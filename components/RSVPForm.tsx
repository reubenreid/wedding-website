import { Textarea, TextInput } from "@mantine/core";
import { FunctionComponent } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IconButton } from "./IconButton";

type Props = {
  rsvps: RSVPEntry[];
  setRsvps: (data: RSVPEntry[]) => void;
  onSubmit: () => void;
};

export const RSVPForm: FunctionComponent<Props> = ({
  rsvps,
  setRsvps,
  onSubmit,
}) => {
  console.log("rsvp", rsvps);
  return (
    <div className="mt-20 grid grid-cols">
      <div className="border-2 rounded-md bg-white p-8 w-[400px] place-self-center">
        {rsvps.map((rsvp, i) => (
          <div className="mb-5">
            <IndividualEntry />
            {i !== 0 && (
              <div className="ml-2">
                <IconButton
                  onClick={() => setRsvps(rsvps.splice(i, 1))}
                  icon={<AiOutlineMinus />}
                />
              </div>
            )}
          </div>
        ))}
        <IconButton
          onClick={() => setRsvps([...rsvps, { name: "", requirements: "" }])}
          icon={<AiOutlinePlus />}
        />
      </div>
    </div>
  );
};

const IndividualEntry = () => {
  return (
    <div>
      <TextInput placeholder="Your Name(s)" label="Name" withAsterisk />
      <Textarea placeholder="Requirements" label="Dietary requirements etc." />
    </div>
  );
};

export type RSVPEntry = {
  name: string;
  requirements?: string;
};
