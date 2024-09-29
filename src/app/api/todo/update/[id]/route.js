import { NextResponse } from "next/server";
import { supabase } from "@/config/supabase";

export async function PUT(request, { params }) {
    const { id } = params; // Extract the id from the URL parameters

    try {
        // Perform the update operation to toggle completed status
        const { data, error } = await supabase
            .from('todos')
            .update({ completed: true }) // or toggle with raw SQL if needed
            // .update({ completed: supabase.raw('NOT completed') }) // or toggle with raw SQL if needed
            .eq('id', id);

        if (error) {
            // Handle Supabase error explicitly
            console.error('Supabase error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }


        const { data: newTodos, error: allTodosError } = await supabase.from('todos').select().order('id', { ascending: true });

        return NextResponse.json(newTodos);

    } catch (err) {
        // Catch and handle any unexpected errors
        console.error('Unexpected error:', err);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}
