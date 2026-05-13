import { supabase } from '../config/supabaseClient'

/**
 * Récupère tous les utilisateurs de la table "User"
 * @returns {Promise<Array>} Liste de tous les utilisateurs
 */
export const getAllUsers = async () => {
  try {
    const { data, error } = await supabase
      .from('User')
      .select('*')

    if (error) {
      console.error('Erreur lors de la récupération des utilisateurs:', error.message)
      throw error
    }

    return data || []
  } catch (error) {
    console.error('Erreur dans getAllUsers:', error)
    throw error
  }
}