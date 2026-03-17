import supabase from "./supabaseClient.js"

export const getCurrentUserEmail = async () =>{
        const {data: {session}} = await supabase.auth.getSession();
        return session?.user?.email ?? null;
}