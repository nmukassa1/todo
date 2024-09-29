import { NextResponse } from "next/server";
import { supabase } from "@/config/supabase";

export async function DELETE(request, { params }) {
    const id = params.id; // Extract the id from the dynamic route

    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    // Perform the delete operation
    const { data, error } = await supabase.from('todos').delete().eq('id', id);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const { data: newTodos, error: allTodosError } = await supabase.from('todos').select().order('id', { ascending: true });
    return NextResponse.json(newTodos );
}
