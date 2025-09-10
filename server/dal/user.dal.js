import supabase from "../db/connect_supabase.js";

export const dalUsers = {
    async getUsers() {
        const { data, error } = await supabase
            .from('users')
            .select("*")
        if (error) throw new Error(error.message);
        return data;
    },
    async getUserByUsername(username) {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('username', username)
            .single();
        if (error) throw new Error(error.message);
        return data;
    },
    async insertNewUser(data) {
        console.log(data);
        const { data: result, error } = await supabase
            .from('users')
            .insert([data])
        if (error) throw new Error(error.message);
        return result;
    }
}