// pages/api/newsletter.js
import { client } from '@/utils/sanity';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        // Parse the request body
        const { email } = await request.json();

        // Basic validation
        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { message: 'Valid email is required' },
                { status: 400 }
            );
        }

        console.log("client =====>", client.config())

        // Check if the email already exists in Sanity
        const existingSubscriber = await client.fetch(
            `*[_type == "subscriber" && email == $email][0]`,
            { email }
        );

        if (existingSubscriber) {
            return NextResponse.json(
                { message: 'You are already subscribed' },
                { status: 400 }
            );
        }

        // Create new subscriber document in Sanity
        await client.create({
            _type: 'subscriber',
            email,
            subscribedAt: new Date().toISOString(),
            status: 'active'
        });

        return NextResponse.json(
            { message: 'Subscription successful' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            { message: 'Failed to subscribe, please try again later' },
            { status: 500 }
        );
    }
}