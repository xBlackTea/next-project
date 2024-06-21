import { supabaseClient } from './SupabaseSetup'

export async function signInByEmail(email: string, password: string) {
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password })
  console.log({ data, error })
}