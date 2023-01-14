import { useState } from "react";
import { RSVPEntry, RSVPForm } from "../RSVPForm";

export const RSVPPage = () => {
  const [rsvps, setRsvps] = useState<RSVPEntry[]>([
    { name: "", requirements: "" },
  ]);

  const onSubmit = () => {
    alert("SUBMIT");
  };

  return (
    <div className="w-full h-full">
      <RSVPForm rsvps={rsvps} setRsvps={setRsvps} onSubmit={onSubmit} />;
    </div>
  );
};
