import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';


type ContactFormProps = {
    message : string
    senderEmail:string
}

const ContactForm = ({message,senderEmail}:ContactFormProps) => {
  return (
    <Html>
        <Head />
        <Preview>New Message from portfolio site</Preview>
        <Tailwind>
            <Body className='bg-gray-100 text-black'>
                <Container>
                    <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-mg'>
                        <Heading className='leading-tight'>
                            You received the following message from contact form
                        </Heading>
                        <Text>
                            {message}
                        </Text>
                        <Hr />
                        <Text>
                            The sender's email is {senderEmail}
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}

export default ContactForm