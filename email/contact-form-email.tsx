import React, { FunctionComponent } from "react";
import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Preview } from "@react-email/preview";
import { Tailwind } from "@react-email/tailwind";
import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Section } from "@react-email/section";
import { Heading } from "@react-email/heading";
import { Text } from "@react-email/text";
import { Hr } from "@react-email/hr";
// Individual component imports whilst @react-email/components is bugged

export interface ContactFormEmailProps {
  message: string;
  senderEmail: string;
}

const ContactFormEmail: FunctionComponent<ContactFormEmailProps> = ({
  message,
  senderEmail,
}) => {
  return (
    <Html>
      <Head></Head>
      <Preview>New message from website</Preview>
      <Tailwind>
        <Body className="bg-slate-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 py-4 rounded-md">
              <Heading className="leading-tight">
                <Text>{message}</Text>
                <Hr />
                <Text>The sender's email is: {senderEmail}</Text>
              </Heading>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
