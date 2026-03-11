import {createClient} from "@supabase/supabase-js"

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,import.meta.env.VITE_SUPABASE_PRIVATE_KEY
);

    // <h1>user: {metadata ? metadata.boulderHal : "No data"}</h1>

    export async function GetUser(){
        const {data: {user}} = await supabase.auth.getUser();
        return(user);
    }
    export async function GetUserEmail(){
        const {data: {user}} = await supabase.auth.getUser();
        return(user?.email);
    }
    export async function GetUserMetadata(){
        const {data: {user}} = await supabase.auth.getUser();
        return(user?.user_metadata);
    }

export default supabase;