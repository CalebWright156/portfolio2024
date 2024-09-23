'use client';

import React from 'react';
import { useState, ChangeEvent, FormEvent } from 'react';

import Section from "@/components/modules/Section";
import SectionHeading from "@/components/modules/SectionHeading";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus('Message sent!');
                setForm({ name: '', email: '', message: '' });
            } else {
                setStatus('Error sending message.');
            }
        } catch (error) {
            console.error(error);
            setStatus('Error sending message.');
        }
    };

    return (
        <Section id={'contact'} className={'h-auto bg-brand_1 dark:bg-brand_2'}>
            <div className={'w-100 flex justify-center'}>
                <SectionHeading title={`Let's chat`} />
            </div>

            <div className='flex items-center pt-12 flex-col'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-12 w-[60%]'>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className='border-2 border-brand_2 rounded-xl p-4'
                    />
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className='border-2 border-brand_2 rounded-xl p-4'

                    />
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                        className='border-2 border-brand_2 rounded-xl p-4 min-h-[12rem]'

                    />
                    <button
                        type='submit'
                        className={'bg-brand_4 dark:bg-brand_3 text-brand_1 dark:text-brand_4 font-bold rounded-xl px-10 py-3 transition-theme hover:text-brand_1 hover:bg-brand_3 cursor-pointer hover:dark:bg-brand_4 hover:dark:text-brand_3 lg:px-[3rem] lg:py-[1rem] lg:text-xl'}>Submit
                    </button>
                </form>
                <h4 className='text-brand_3 text-[2rem] pt-[1rem]'>{status}</h4>
            </div>
        </Section>
    );
};

export default ContactForm;