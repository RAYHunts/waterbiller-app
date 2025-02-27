import { supabase } from "../utils/supabase"

const getUserMeterDevice = async (userId: string) => {
    const { data, error } = await supabase.from('meter_devices').select('*').eq('user_id', userId)

    if (error) {
        console.error(error)
        return null
    }

    return data

}


export { getUserMeterDevice }