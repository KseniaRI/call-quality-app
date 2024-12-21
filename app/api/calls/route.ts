import { NextResponse } from 'next/server';
import { mockCallData } from '../mockCallData';

export async function GET(): Promise<NextResponse> {
    try {
        return NextResponse.json({ data: mockCallData });
    } catch (error) {
        return NextResponse.json(
            { error: 'Error processing request' },
            { status: 500 },
        );
    }
}
