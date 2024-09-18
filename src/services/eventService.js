import { supabase } from '../supabaseClient'

export const eventService = {
  async getEvents() {
    console.log('Fetching events...');
    const { data, error } = await supabase
      .from('eventdata')
      .select('*')
      .order('commence_time', { ascending: true })

    if (error) {
      console.error('Error fetching events:', error)
      return []
    }
    console.log('Fetched events:', data);
    return data
  },

  async getEventById(id) {
    const { data, error } = await supabase
      .from('eventdata')
      .select('*')
      .eq('event_id', id)
      .single()

    if (error) {
      console.error(`Error fetching event with id ${id}:`, error)
      return null
    }
    return data
  }
}