import { NextResponse } from "next/server";
import { supabase } from "@/config/supabase";

export async function GET(request){
    try{
        const {data, error} = await supabase.from('todos').select().order('id', {ascending: true});
        if(error){
            throw new Error(error);
        }
        return NextResponse.json(data);
    } catch(error){
        console.error(error);
    }
}