import { Textarea, TextInput, Checkbox, Button } from "@mantine/core";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";

type Props = {
  onSubmit: ({ formDetails }: { formDetails: FormDetails }) => void;
};

export type FormDetails = {
  names: string;
  weddingRsvp: boolean;
  receptionRsvp: boolean;
  email: string;
  contactNumber: string;
  requirements?: string;
  notes?: string;
}

export const RSVPForm: FunctionComponent<Props> = ({
  onSubmit,
}) => {
  const [formDetails, setFormDetails] = useState<FormDetails>({
    contactNumber: "",
    email: "",
    names: "",
    weddingRsvp: false,
    receptionRsvp: false,
    notes: "",
    requirements: "",
  });

  const isButtonDisabled =
    !formDetails.names.length || !formDetails.email.length || !formDetails.contactNumber.length


  return (
    <div className="mt-20 grid grid-cols">
      <div className="border-2 rounded-md bg-white p-8 w-[400px] place-self-center">
        <IndividualEntry formDetails={formDetails} setFormDetails={setFormDetails} />
        <Button disabled={isButtonDisabled} className="ml-[35%] mt-[10px]" variant="subtle" onClick={() => onSubmit({ formDetails })}>
          Submit
        </Button>
      </div>
    </div>
  );
};

const IndividualEntry = ({ setFormDetails, formDetails }: {
  setFormDetails:
  Dispatch<SetStateAction<FormDetails>>, formDetails: FormDetails
}) => {
  return (
    <div>
      <TextInput
        value={formDetails.names}
        onChange={(event) => setFormDetails(currentDetails =>
          ({ ...currentDetails, names: event.target.value }))}
        placeholder="Your Name(s)" name="names" label="Name" withAsterisk />
      <Checkbox value={formDetails.names}
        onChange={(event) => setFormDetails(currentDetails =>
          ({ ...currentDetails, weddingRsvp: event.target.checked }))}
        className="mt-5" label="Attending Wedding" required={true} />
      <Checkbox className="mt-2" checked={formDetails.receptionRsvp}
        onChange={(event) => setFormDetails(currentDetails =>
          ({ ...currentDetails, receptionRsvp: event.target.checked }))}
        label="Attending Reception" />
      <TextInput checked={formDetails.receptionRsvp}
        onChange={(event) => setFormDetails(currentDetails =>
          ({ ...currentDetails, email: event.target.value }))}
        placeholder="Your Email Address" label="Email Address" withAsterisk />
      <TextInput value={formDetails.contactNumber}
        onChange={(event) => setFormDetails(currentDetails =>
          ({ ...currentDetails, contactNumber: event.target.value }))}
        placeholder="Your Contact Number" label="Contact Number" withAsterisk />
      <Textarea value={formDetails.requirements}
        onChange={(event) => setFormDetails(currentDetails =>
          ({ ...currentDetails, requirements: event.target.value }))}
        placeholder="Requirements" label="Dietary requirements etc." />
      <Textarea value={formDetails.notes}
        onChange={(event) => setFormDetails(currentDetails =>
          ({ ...currentDetails, notes: event.target.value }))}
        placeholder="Notes" label="Any further information" />
    </div>
  );
};

export type RSVPEntry = {
  name: string;
  requirements?: string;
};
