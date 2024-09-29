import { NextResponse } from "next/server";
import { supabase } from "@/config/supabase";

export async function POST(request) {
    const { text } = await request.json();
    try {
        const { data, error } = await supabase.from('todos').insert({description: text}).select();
        if (error) {
            console.log(error);
            throw new Error(error);
        }
        //If no error, fetch entire todo list
        const { data: allTodos, error: allTodosError } = await supabase.from('todos').select().order('id', { ascending: true });
        return NextResponse.json({ allTodos });
    } catch (error) {
        return NextResponse.json({ error });
    }
}