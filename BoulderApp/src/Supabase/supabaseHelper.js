import supabase from "./supabaseClient.js"

export const getCurrentUserEmail = async () =>{
        const {data: {session}} = await supabase.auth.getSession();
        return session?.user?.email ?? null;
}

export const getUserRank = async () =>{
        const {data: {session}} = await supabase.auth.getSession();
        return session.user.user_metadata.boulderHal ?? null;
}