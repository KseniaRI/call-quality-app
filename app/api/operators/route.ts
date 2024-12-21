import { NextResponse } from 'next/server';
import { mockOperators } from '../mockOperators';

export async function GET(): Promise<NextResponse> {
    try {
        return NextResponse.json({ data: mockOperators });
    } catch (error) {
        return NextResponse.json(
            { error: 'Error processing request' },
            { status: 500 },
        );
    }
}

export async function POST(req: Request): Promise<NextResponse> {
    try {
        const { email, newPassword } = await req.json();
        const operator = mockOperators.find(op => op.email === email);
        if (!operator) {
            return NextResponse.json(
                { error: 'Operator not found' },
                { status: 404 },
            );
        }
        operator.password = newPassword;
        return NextResponse.json({ data: operator });
    } catch (error) {
        return NextResponse.json(
            { error: 'Error processing request' },
            { status: 500 },
        );
    }
}
