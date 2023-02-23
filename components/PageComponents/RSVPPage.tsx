import { useState } from "react";
import emailjs from "@emailjs/browser"
import { FormDetails, RSVPEntry, RSVPForm } from "../RSVPForm";
import { GetKeyData } from "../../pages/api/getkey";
import { showNotification } from "@mantine/notifications";

export const RSVPPage = () => {


  const onSubmit = async ({ formDetails }: { formDetails: FormDetails }) => {
    const response: GetKeyData = await (await fetch("/api/getkey", {
      method: "GET",
    })).json();
    if (response.pubKey && response.servKey) {
      await emailjs.send(
        response.servKey,
        "template_lmhxfls",
        formDetails,
        response.pubKey
      )
      showNotification({
        message: "RSVP submitted",
        color: "green"
      })
    }
  };

  return (
    <div className="">
      <RSVPForm onSubmit={onSubmit} />
    </div>
  );
};
